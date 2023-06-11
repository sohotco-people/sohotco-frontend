import { useIsLoginState } from 'context/hooks'
import { removeCookie } from '../util/cookie'
import { useRouter } from 'next/router'

export const useLogout = () => {
  const router = useRouter()
  const [, setIsLogin] = useIsLoginState()

  const logout = () => {
    removeCookie('SOHOTCO_OAUTH')
    setIsLogin(false)
    router.push('/')
  }

  return { logout }
}
