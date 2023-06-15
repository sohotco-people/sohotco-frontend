import Layout from '@atoms/layout'
import SubTitle from '@atoms/subTitle'
import Textarea from '@atoms/textarea'
import ButtonGroupPercent from '@molecules/buttonGroupPercent'
import { MY_DATA } from 'config'
import { ModalsDispatchContext } from 'context/contexts'
import { useUser } from 'context/hooks'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { Type_User } from 'types/Types'
import { fetchPut } from 'util/fetch'

interface Props {
  data: Type_User
}

const UserIntro = () => {
  const router = useRouter()
  const { openModal } = useContext(ModalsDispatchContext)
  const { me, getMe } = useUser()

  const [introText, setIntroText] = useState<string>('')

  useEffect(() => {
    getMe()
  }, [])

  useEffect(() => {
    if (me?.intro) {
      setIntroText(me.intro)
    }
  }, [me])

  useEffect(() => {
    if (introText.length > 0) {
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

      // 새로고침 방지
      window.addEventListener('beforeunload', handleBeforeUnload)
    }

    return () => {
      router.beforePopState(() => true)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [introText])

  const writeIntro = (text: string) => {
    setIntroText(text)
  }

  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    e.preventDefault()
    e.returnValue = ''
  }

  const openExitModal = () => {
    const modalObj = {
      id: 'modal-introCancel',
      content: '내용이 저장되지 않았습니다. 그래도 나가시겠습니까?',
      confirm: clickCancelBtn,
      type: 'confirm',
      confirmTxt: '나가기',
    }

    openModal(modalObj)
  }

  const clickCancelBtn = () => {
    window.history.replaceState('', '', '/user')
    router.replace('/user')
  }

  const clickSaveBtn = async () => {
    if (introText.length > 0) {
      const params = {
        intro: introText,
      }

      const res = await fetchPut(MY_DATA, params)
      if (res.status === 200) {
        const modalObj = {
          id: 'modal-intro',
          content: '성공적으로 업데이트를 완료하였습니다.',
        }

        openModal(modalObj)
      }
    }
  }

  return (
    <>
      <Layout>
        <SubTitle className="pb-5">자기소개를 입력해주세요.</SubTitle>
        <Textarea
          text={introText}
          onChange={e => writeIntro(e.target.value)}
          placeholder="정성스럽게 작성할수록 기회가 많아져요."
        />
      </Layout>
      <ButtonGroupPercent
        leftBtnClick={openExitModal}
        rightBtnClick={clickSaveBtn}
      />
    </>
  )
}

export default UserIntro
