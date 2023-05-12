import NavMenu from '@atoms/navMenu'
import Image from 'next/image'
import { NavContext } from 'context/contexts'
import { useRouter } from 'next/router'
import { useContext } from 'react'

interface NavMenu {
  id: number
  name: string
  link: string
}

const Nav = () => {
  const route = useRouter()
  const isOpened = useContext(NavContext)

  const movePage = (link: string) => {
    route.push(link)
  }

  return (
    <div
      className={`fixed bg-white w-full h-full ${
        isOpened ? 'visible' : 'invisible'
      }`}
    >
      {NAV_DATA.map((nav: NavMenu) => {
        if (nav.id === 2) {
          return (
            <>
              <NavMenu
                key={nav.id}
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
            </>
          )
        } else {
          return (
            <NavMenu
              key={nav.id}
              onClick={() => {
                movePage(nav.link)
              }}
            >
              {nav.name}
            </NavMenu>
          )
        }
      })}
    </div>
  )
}

// const NAV_DATA = [
//   { id: 0, name: '로그인 ⋅ 회원가입', link: '/' },
//   { id: 1, name: '사이드 프로젝트', link: '/' },
// ] // 미로그인
const NAV_DATA = [
  { id: 2, name: `유저 ID`, link: '/' },
  { id: 3, name: '사이드 프로젝트', link: '/' },
  { id: 4, name: '로그아웃', link: '/' },
] // 로그인
const SUB_NAV_DATA = [
  { id: 2.1, name: '내 소식', link: '/' },
  { id: 2.2, name: '내 프로젝트', link: '/' }, // or 프로젝트 생성(프로젝트 없을 시)
  { id: 2.3, name: '팀원 찾기', link: '/' },
]

export default Nav
