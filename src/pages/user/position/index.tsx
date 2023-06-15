import Position from '@templates/position'
import { useUser } from 'context/hooks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const UserPosition = () => {
  const { me, getMe } = useUser()
  const router = useRouter()

  // 해당 페이지 history stack에서 제거
  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {
      if (as !== router.asPath) {
        router.replace(as)
      }
      return true
    })
  }, [router])

  useEffect(() => {
    getMe()
  }, [])

  return <Position user={me} />
}

export default UserPosition
