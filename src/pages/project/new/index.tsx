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
    } else if (projectDesc === '') {
      text = '프로젝트 소개를 입력하세요.'
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
            preview="edit"
            visiableDragbar={false}
            extraCommands={[]}
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
