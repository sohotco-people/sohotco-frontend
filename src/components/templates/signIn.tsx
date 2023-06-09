import { useSignInState } from 'context/hooks'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const SignIn = () => {
  const router = useRouter()
  const { signInPage, toggleSignIn } = useSignInState()

  const BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL
  const redirect = 'http://localhost:8080/login/oauth'
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_APP_KAKAO_KEY
    }&redirect_uri=${redirect}&response_type=code&state=${BASE_URL + router.asPath}`

  const handleClose = () => {
    toggleSignIn(signInPage)
  }

  if (signInPage) {

  } else {
    return (<></>)
  }

  return (
    <div className="fixed top-0 left-0 bg-white w-full h-full px-5 py-10 z-20">
      <button onClick={handleClose} className="absolute top-5 right-5 w-6 h-6 bg-contain bg-center bg-no-repeat bg-[url('/images/x.png')]"></button>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex-1">
          <div className="flex flex-col items-center justify-center gap-5 h-full">
            <div className="w-[84px] h-[84px] bg-contain bg-center bg-no-repeat bg-[url('/images/sohotco-logo-02.png')]"></div>
            <span className="text-xl font-bold" style={{ 'textShadow': '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
              소소하지만 확실한 코딩
            </span>
          </div>
        </div>
        <Link className="px-6 py-4 w-full bg-[#FEE500] rounded text-center font-semibold" href={KAKAO_AUTH_URL}>
          <Image
            src="/images/kakao.png"
            alt="menu arrow"
            className='float-left'
            width={24}
            height={24}
          />
          카카오로 시작하기
        </Link>
      </div>
    </div>
  )
}

export default SignIn
