import Nav from '@molecules/nav'
import Image from 'next/image'
import { useIsLoginState, useNavOpenState } from 'context/hooks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { createCookie, readCookie } from 'util/cookie'
import sohotco from '../../../public/images/sohotco-logo-02.png'

const Header = () => {
  const router = useRouter()
  const { query } = router
  const cookie = readCookie('SOHOTCO_OAUTH')

  const [, setIsNavOpened] = useNavOpenState()
  const [, setIsLogin] = useIsLoginState()

  // 로그인 상태 확인 후 쿠키 생성
  useEffect(() => {
    if (query.access_token) {
      const token =
        typeof query.access_token !== 'string'
          ? query.access_token[0]
          : query.access_token
      createCookie('SOHOTCO_OAUTH', token)
      setIsLogin(true)
      router.push(router.pathname)
      // 팝업 닫기
    }
  }, [query, router])

  // 로그인 상태 변경
  useEffect(() => {
    if (cookie) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [cookie])

  return (
    <>
      <div className="sticky top-0 h-20 w-full p-5 bg-white shadow-md flex justify-between items-center z-20">
        <Image
          src={sohotco}
          alt="logo"
          width={44}
          height={44}
        />
        <div
          className="space-y-1 hover:cursor-pointer"
          onClick={() => setIsNavOpened(prev => !prev)}
        >
          <div className="w-5 h-0.5 bg-black rounded-xl"></div>
          <div className="w-5 h-0.5 bg-black rounded-xl"></div>
          <div className="w-5 h-0.5 bg-black rounded-xl"></div>
        </div>
      </div>
      <Nav />
    </>
  )
}

export default Header
