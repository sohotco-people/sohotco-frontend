import Layout from '@atoms/layout'
import LinedInput from '@atoms/linedInput'
import ButtonGroupPercent from '@molecules/buttonGroupPercent'
import { useState } from 'react'

const UserAbout = () => {
  const [nick, setNick] = useState('')
  const [link, setLink] = useState('')

  const changeNickVal = (val: string) => {
    setNick(val)
  }

  const changeLinkVal = (val: string) => {
    setLink(val)
  }

  const clickCancelBtn = () => {}

  const clickSaveBtn = () => {}

  return (
    <>
      <Layout>
        <div className="flex items-center">
          <span className="w-2/5">닉네임*</span>
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
        rightBtnClick={clickSaveBtn}
      />
    </>
  )
}

export default UserAbout
