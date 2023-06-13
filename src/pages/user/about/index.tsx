import Layout from '@atoms/layout'
import LinedInput from '@atoms/linedInput'
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

const UserAbout = () => {
  const router = useRouter()
  const { openModal } = useContext(ModalsDispatchContext)
  const { me, getMe } = useUser()

  const [nick, setNick] = useState('')
  const [link, setLink] = useState('')

  useEffect(() => {
    getMe()
  }, [])

  useEffect(() => {
    if (me?.name) {
      setNick(me.name)
    }
  }, [me])

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
    } else if (!link.includes('http')) {
      text = '링크가 올바르지 않습니다.'
    }

    if (text === '') {
      clickSaveBtn()
    } else {
      const modalObj = {
        id: 'modal-about',
        content: text,
      }

      openModal(modalObj)
    }
  }

  const clickCancelBtn = () => {
    router.push('/user')
  }

  const clickSaveBtn = async () => {
    if (nick.length > 0) {
      let params: { name: string; link?: string } = {
        name: nick,
      }

      if (link) {
        params.link = link
      }

      const res = await fetchPut(MY_DATA, params)
      if (res.status === 200) {
        const modalObj = {
          id: 'modal-about',
          content: '성공적으로 업데이트를 완료하였습니다.',
        }

        openModal(modalObj)
      }
    }
  }

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
