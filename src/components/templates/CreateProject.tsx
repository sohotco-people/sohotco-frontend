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
import { fetchPost } from 'util/fetch'
import Options from '@organisms/options'
import { useProject } from 'hooks/project'

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

interface Props {
  routeBack: string
}

const CreateProject = ({ routeBack }: Props) => {
  const router = useRouter()
  const [options, setOptions] = useState(0)
  const { openModal } = useContext(ModalsDispatchContext)

  const { project, update, onChange, updateDescription } = useProject()

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
        window.history.replaceState('', '', router.asPath)
        router.replace(router.asPath)
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

  const openPanel = (idx: number) => {
    setOptions(idx)
  }

  const save = () => {
    setOptions(0)
  }

  const clickCancel = () => {
    window.sessionStorage.removeItem('blockProjectInfoModal')
    window.history.replaceState('', '', routeBack)
    router.replace(routeBack)
  }

  return (
    <Layout>
      <InputColumn
        title="프로젝트 제목"
        name="name"
        text={project.name}
        onChange={onChange}
        placeholder="사이드 프로젝트 목록에 노출돼요."
      />
      <InputColumn
        title="한줄 소개"
        name="intro"
        text={project.intro}
        onChange={onChange}
        placeholder="프로젝트 제목의 추가 설명으로 노출돼요."
      />
      <div className="mb-15">
        <SubTitle>유형 선택</SubTitle>
        <div className="flex flex-col gap-5">
          <Options type={options} optionChecked={project} onchange={onChange} save={save} />
          <Panel onClick={() => openPanel(3)}>회의 방식</Panel>
          <Panel onClick={() => openPanel(4)}>회의 일정</Panel>
          <Panel onClick={() => openPanel(1)}>모집 역할</Panel>
        </div>
      </div>
      <div className="mb-15">
        <SubTitle>프로젝트 소개</SubTitle>
        <div>
          <MDEditor
            value={project.description}
            onChange={value => updateDescription(value as string)}
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
            extraCommands={[]}
            textareaProps={{
              placeholder: 'test ....'
            }}
          />
        </div>
      </div>
      <ButtonGroupPercent
        leftBtnClick={openExitModal}
        rightBtnClick={update}
      />
    </Layout>
  )
}

export default CreateProject
