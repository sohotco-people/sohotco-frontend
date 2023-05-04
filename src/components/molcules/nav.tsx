import NavMenu from '@atoms/navMenu'
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
      })}
    </div>
  )
}

// const NAV_DATA = [
//   { id: 0, name: '로그인 ⋅ 회원가입', link: '/' },
//   { id: 1, name: '사이드 프로젝트', link: '/' },
// ] // 미로그인
const NAV_DATA = [
  { id: 2, name: '내 프로필', link: '/' },
  { id: 3, name: '받은 제안', link: '/' },
  { id: 4, name: '사이드 프로젝트', link: '/' },
  { id: 5, name: '프로젝트 생성', link: '/' },
  { id: 6, name: '로그아웃', link: '/' },
] // 로그인

export default Nav
