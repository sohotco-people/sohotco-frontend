import SignIn from '@templates/signIn'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Login = () => {
  const route = useRouter()
  const query = route.query

  useEffect(() => {
    if (query.hasOwnProperty('code')) {
      const code = query.code
    } else if (query.hasOwnProperty('error')) {
      route.push('/login')
    }
  }, [query])

  const authorize = async () => {
    const redirect = 'http://localhost:8080/login/kakao'
    const URL = 'https://kauth.kakao.com/oauth/authorize'
    const QUERY = `?cliend_id=${process.env.NEXT_PUBLIC_APP_KAKAO_KEY}&redirect_uri=${redirect}&response_type=code`
    const option = {
      method: 'GET',
      headers: {},
    }

    try {
      const res = await fetch(URL + QUERY, option)
      // api 호출하여 후처리
      return res
    } catch (e) {
      console.log('kakao login error', e)
    }
  }

  return <SignIn clickLogin={authorize} />
}

export default Login
