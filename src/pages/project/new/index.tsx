'use client'

import Layout from '@atoms/layout'
import Panel from '@atoms/panel'
import SubTitle from '@atoms/subTitle'
import InputColumn from '@molecules/InputColumn'
import ButtonGroupPercent from '@molecules/buttonGroupPercent'
import { ModalsDispatchContext } from 'context/contexts'
import { useNewProjectState } from 'context/hooks'
import { useRouter } from 'next/router'
import { ChangeEvent, useState, useEffect, useContext } from 'react'
import dynamic from 'next/dynamic'

import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

const editorTitle: any = {
  name: 'title3',
  keyCommand: 'title3',
  buttonProps: { 'aria-label': 'Insert title3' },
  icon: (
    <svg width="12" height="12" viewBox="0 0 520 520">
      <path
        fill="currentColor"
        d="M15.7083333,468 C7.03242448,468 0,462.030833 0,454.666667 L0,421.333333 C0,413.969167 7.03242448,408 15.7083333,408 L361.291667,408 C369.967576,408 377,413.969167 377,421.333333 L377,454.666667 C377,462.030833 369.967576,468 361.291667,468 L15.7083333,468 Z M21.6666667,366 C9.69989583,366 0,359.831861 0,352.222222 L0,317.777778 C0,310.168139 9.69989583,304 21.6666667,304 L498.333333,304 C510.300104,304 520,310.168139 520,317.777778 L520,352.222222 C520,359.831861 510.300104,366 498.333333,366 L21.6666667,366 Z M136.835938,64 L136.835937,126 L107.25,126 L107.25,251 L40.75,251 L40.75,126 L-5.68434189e-14,126 L-5.68434189e-14,64 L136.835938,64 Z M212,64 L212,251 L161.648438,251 L161.648438,64 L212,64 Z M378,64 L378,126 L343.25,126 L343.25,251 L281.75,251 L281.75,126 L238,126 L238,64 L378,64 Z M449.047619,189.550781 L520,189.550781 L520,251 L405,251 L405,64 L449.047619,64 L449.047619,189.550781 Z"
      />
    </svg>
  ),
  execute: (state: any, api: any) => {
    let modifyText = `### ${state.selectedText}\n`
    if (!state.selectedText) {
      modifyText = `### `
    }
    api.replaceSelection(modifyText)
  },
}

const NewProject = () => {
  const router = useRouter()
  const { openModal } = useContext(ModalsDispatchContext)
  const [newProject, setNewProject] = useNewProjectState()

  const [title, setTitle] = useState('')
  const [intro, setIntro] = useState('')
  const [projectDesc, setProjectDesc] = useState<string | undefined>('')

  useEffect(() => {
    const storage = window.sessionStorage

    const modalObj = {
      id: 'modal-projectInfo',
      content: (
        <span>
          공지사항
          <br />
          <br />
          프로젝트 소개 내용은
          <br />
          제안한 유저만 볼 수 있습니다.
          <br />
          <br />
          유저가 연락할 수 있도록
          <br />
          연락처를 소개에 작성하세요.
        </span>
      ),
    }

    storage.getItem('blockProjectInfoModal') ?? openModal(modalObj)
    storage.setItem('blockProjectInfoModal', 'true')
  }, [])

  useEffect(() => {
    // 뒤로가기 방지
    router.beforePopState(({ url, as, options }) => {
      if (as !== router.asPath) {
        openExitModal()
        window.history.pushState('', '')
        router.push(router.asPath)
        return false
      }

      return true
    })

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      e.returnValue = ''
    }

    // 새로고침 방지
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      router.beforePopState(() => true)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  const setProjectTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const setProjectIntro = (e: ChangeEvent<HTMLInputElement>) => {
    setIntro(e.target.value)
  }

  const openExitModal = () => {
    const modalObj = {
      id: 'modal-projectExit',
      content: '내용이 저장되지 않았습니다. 그래도 나가시겠습니까?',
      confirm: clickCancel,
      type: 'confirm',
      confirmTxt: '나가기',
    }

    openModal(modalObj)
  }

  const openPanel = (link: string) => {
    router.push(router.asPath + '/' + link)
  }

  const checkValidation = () => {
    let text = ''

    if (title === '') {
      text = '프로젝트 제목을 입력하세요.'
    } else if (intro === '') {
      text = '한줄 소개를 입력하세요.'
    } else if (newProject.meetType === '') {
      text = '회의 방식을 선택하세요.'
    } else if (newProject.week.length === 0 || newProject.time.length === 0) {
      text = '회의 일정을 선택하세요.'
    } else if (newProject.position.length === 0) {
      text = '모집 역할을 선택하세요.'
    }

    if (text === '') {
      clickSave()
    } else {
      const modalObj = {
        id: 'modal-projectSave',
        content: text,
      }

      openModal(modalObj)
    }
  }

  const clickCancel = () => {
    window.sessionStorage.removeItem('blockProjectInfoModal')
    //특정 라우트로 이동
  }

  const clickSave = () => {
    //전송 후 성공 시
    //전역 state 리셋 및 아래 코드 처리
    window.sessionStorage.removeItem('blockProjectInfoModal')
  }

  return (
    <Layout>
      <InputColumn
        title="프로젝트 제목"
        text={title}
        onChange={setProjectTitle}
        placeholder="사이드 프로젝트 목록에 노출돼요."
      />
      <InputColumn
        title="한줄 소개"
        text={intro}
        onChange={setProjectIntro}
        placeholder="프로젝트 제목의 추가 설명으로 노출돼요."
      />
      <div className="mb-15">
        <SubTitle>유형 선택</SubTitle>
        <div className="flex flex-col gap-5">
          <Panel onClick={() => openPanel('meetingSystem')}>회의 방식</Panel>
          <Panel onClick={() => openPanel('meetingTime')}>회의 일정</Panel>
          <Panel onClick={() => openPanel('position')}>모집 역할</Panel>
        </div>
      </div>
      <div className="mb-15">
        <SubTitle>프로젝트 소개</SubTitle>
        <div>
          <MDEditor
            value={projectDesc}
            onChange={setProjectDesc}
            previewOptions={{
              allowedElements: [
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'p',
                'a',
                'span',
                'br',
              ],
            }}
            commands={[editorTitle]}
          />
        </div>
      </div>
      <ButtonGroupPercent
        leftBtnClick={openExitModal}
        rightBtnClick={checkValidation}
      />
    </Layout>
  )
}

export default NewProject
