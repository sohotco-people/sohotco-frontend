import Layout from '@atoms/layout'
import ButtonGroupPercent from '@molecules/buttonGroupPercent'
import { ModalsDispatchContext } from 'context/contexts'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { Type_User } from 'types/Types'

interface Props {
  data: Type_User
}

const UserIntro = ({ data }: Props) => {
  const route = useRouter()
  const { openModal, closeModal } = useContext(ModalsDispatchContext)

  const [introText, setIntroText] = useState<string>()

  useEffect(() => {
    if (data.intro) {
      setIntroText(data.intro)
    }
  }, [data.intro])

  const writeIntro = (text: string) => {
    setIntroText(text)
  }

  const openExitModal = () => {
    const modalObj = {
      id: 'modal-introCancel',
      content: '내용이 저장되지 않았습니다. 그래도 나가시겠습니까?',
      confirm: clickCancelBtn,
      type: 'confirm',
    }

    openModal(modalObj)
  }

  const clickCancelBtn = () => {
    const modalObj = {
      id: 'modal-introCancel',
      content: '내용이 저장되지 않았습니다. 그래도 나가시겠습니까?',
      confirm: clickCancelBtn,
      type: 'confirm',
    }
    closeModal(modalObj)
    route.push('/user')
  }

  const clickSaveBtn = () => {}

  return (
    <>
      <Layout>
        <p className="text-lg font-medium leading-6">
          자기소개를 입력해주세요.
        </p>
        <textarea
          placeholder="정성스럽게 작성할수록 기회가 많아져요"
          value={introText}
          onChange={e => writeIntro(e.target.value)}
          className="w-full h-52 mt-10 p-4 border border-gray1 focus:border-black rounded-lg resize-none focus:outline-none"
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

export async function getStaticProps() {
  const data = {
    id: 1,
    name: 'name',
    link: '/link',
    intro: 'introduction',
    positions: [{ id: 1, name: 'gn' }],
    experiences: [{ id: 1, name: 'gn' }],
    meetingLocations: [{ id: 1, name: 'gn' }],
    meetingWeeks: [{ id: 1, name: 'gn' }],
    meetingSystems: [{ id: 1, name: 'gn' }],
    meetingTimes: [{ id: 1, name: 'gn' }],
    createdAt: '2023-05-17',
    deletedAt: '2023-05-17',
  }

  return {
    props: {
      data,
    },
  }
}
