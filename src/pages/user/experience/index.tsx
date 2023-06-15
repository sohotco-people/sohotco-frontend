import Experience from '@templates/experience'
import { useUser } from 'context/hooks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const UserExperience = () => {
  const router = useRouter()
  const { me, getMe } = useUser()

  useEffect(() => {
    getMe()
  }, [])

  // 해당 페이지 history stack에서 제거
  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {
      if (as !== router.asPath) {
        router.replace(as)
      }
      return true
    })
  }, [router])

  return <Experience user={me} />
}

export default UserExperience
