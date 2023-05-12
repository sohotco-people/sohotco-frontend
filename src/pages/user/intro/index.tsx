import Layout from '@atoms/layout'
import ButtonGroupPercent from '@molecules/buttonGroupPercent'
import { useState } from 'react'

const UserIntro = () => {
  const [introText, setIntroText] = useState<string>()

  const writeIntro = (text: string) => {
    setIntroText(text)
  }

  const clickCancelBtn = () => {}

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
          className="w-full h-52 mt-10 p-4 border border-gray1 rounded-lg resize-none focus:outline-none"
        />
      </Layout>
      <ButtonGroupPercent
        leftBtnClick={clickCancelBtn}
        rightBtnClick={clickSaveBtn}
      />
    </>
  )
}

export default UserIntro
