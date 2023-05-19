import Layout from '@atoms/layout'
import LinedInput from '@atoms/linedInput'
import ButtonGroupPercent from '@molecules/buttonGroupPercent'
import { ModalsDispatchContext } from 'context/contexts'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { Type_User } from 'types/Types'

interface Props {
  data: Type_User
}

const UserAbout = ({ data }: Props) => {
  const route = useRouter()
  const { openModal } = useContext(ModalsDispatchContext)

  const [nick, setNick] = useState('')
  const [link, setLink] = useState('')

  useEffect(() => {
    if (data.name) {
      setNick(data.name)
    }
  }, [data.name])

  const changeNickVal = (val: string) => {
    setNick(val)
  }

  const changeLinkVal = (val: string) => {
    setLink(val)
  }

  const checkValidation = () => {
    let text = ''
    const regex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/

    if (nick === '') {
      text = '닉네임을 입력하세요.'
    } else if (!regex.test(nick)) {
      text = '한글/영문/숫자만 가능합니다.'
    }

    if (text === '') {
      // 저장
    } else {
      const modalObj = {
        id: 'modal-about',
        content: text,
        confirm: clickSaveBtn,
      }

      openModal(modalObj)
    }
  }

  const clickCancelBtn = () => {
    route.push('/user')
  }

  const clickSaveBtn = () => {}

  return (
    <>
      <Layout>
        <div className="flex items-center">
          <span className="w-2/5">
            닉네임<span className="text-primary1">*</span>
          </span>
          <LinedInput
            text={nick}
            onChange={e => changeNickVal(e.target.value)}
            placeholder="유저들에게 공개돼요"
          />
        </div>
        <div className="flex items-center mt-5">
          <span className="w-2/5">소개링크</span>
          <LinedInput
            text={link}
            onChange={e => changeLinkVal(e.target.value)}
            placeholder="나를 소개하는 링크를 올려주세요"
          />
        </div>
      </Layout>
      <ButtonGroupPercent
        leftBtnClick={clickCancelBtn}
        rightBtnClick={checkValidation}
      />
    </>
  )
}

export default UserAbout

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
