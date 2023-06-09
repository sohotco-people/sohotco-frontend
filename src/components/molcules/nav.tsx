import NavMenu from '@atoms/navMenu'
import { useSignInState, useIsLoginState, useNavOpenState } from 'context/hooks'
import { useLogout } from 'hooks/hooks'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Fragment, useEffect } from 'react'

interface NavMenu {
  id: number
  name: string
  link: string
}

const Nav = () => {
  const router = useRouter()
  const [isNavOpened, setIsNavOpened] = useNavOpenState()
  const [isLogin] = useIsLoginState()
  const { signInPage, toggleSignIn } = useSignInState()
  const { logout } = useLogout()

  useEffect(() => {
    if (isNavOpened) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isNavOpened])

  const movePage = (link: string) => {
    if (link == '/signIn') {
      toggleSignIn(signInPage)
      return
    }
    router.push(link)
    setTimeout(() => setIsNavOpened(false), 150)
  }

  return (
    <div
      className={`fixed top-20 bg-white w-full h-full z-10 ${isNavOpened ? 'visible' : 'invisible'
        }`}
    >
      {isLogin
        ? NAV_DATA_LOGIN.map((nav: NavMenu) => {
          if (nav.id === 2) {
            return (
              <Fragment key={nav.id}>
                <NavMenu
                  onClick={() => {
                    movePage(nav.link)
                  }}
                >
                  {nav.name}
                </NavMenu>
                {SUB_NAV_DATA.map((nav: NavMenu) => {
                  return (
                    <NavMenu
                      key={nav.id}
                      onClick={() => {
                        movePage(nav.link)
                      }}
                    >
                      <Image
                        src="/images/navArrow.png"
                        alt="menu arrow"
                        width={13}
                        height={13}
                        style={{ marginRight: 15 }}
                      />
                      {nav.name}
                    </NavMenu>
                  )
                })}
              </Fragment>
            )
          } else {
            return (
              <NavMenu
                key={nav.id}
                onClick={() => {
                  if (nav.id === 4) {
                    logout()
                    setIsNavOpened(false)
                  } else {
                    movePage(nav.link)
                  }
                }}
              >
                {nav.name}
              </NavMenu>
            )
          }
        })
        : NAV_DATA_NOTLOGIN.map((nav: NavMenu) => {
          return (
            <NavMenu key={nav.id} onClick={() => movePage(nav.link)}>
              {nav.name}
            </NavMenu>
          )
        })}
    </div>
  )
}

const NAV_DATA_NOTLOGIN = [
  { id: 0, name: '로그인 ⋅ 회원가입', link: '/signIn' },
  { id: 1, name: '사이드 프로젝트', link: '/project' },
]
const NAV_DATA_LOGIN = [
  { id: 2, name: `유저 ID`, link: '/user' },
  { id: 3, name: '사이드 프로젝트', link: '/project' },
  { id: 4, name: '로그아웃', link: '/' },
]
const SUB_NAV_DATA = [
  { id: 2.1, name: '내 소식', link: '/news' },
  { id: 2.2, name: '내 프로젝트', link: '/project/my' }, // or 프로젝트 생성(프로젝트 없을 시)
  { id: 2.3, name: '팀원 찾기', link: '/teammate' },
]

export default Nav
