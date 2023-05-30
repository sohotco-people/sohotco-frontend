import { useIsLoginOpenState } from 'context/hooks'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SignIn = () => {
  const router = useRouter()
  const { open, toggleLogin } = useIsLoginOpenState()

  const BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL
  const redirect = 'http://3.35.244.176:8080/login/oauth'
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_APP_KAKAO_KEY
    }&redirect_uri=${redirect}&response_type=code&state=${BASE_URL + router.asPath}`

  const handleClose = () => {
    toggleLogin(open)
  }

  if (open) {

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
            <span className="text-xl font-extrabold">
              소소하지만 확실한 코딩
            </span>
          </div>
        </div>
        <Link className="px-6 py-4 w-full bg-yellow-400 rounded text-center" href={KAKAO_AUTH_URL}>
          카카오로 시작하기
        </Link>
      </div>
    </div>
  )
}

export default SignIn
