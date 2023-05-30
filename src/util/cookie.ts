import { setCookie, getCookie, deleteCookie } from 'cookies-next'

export const createCookie = (key: string, value: string) => {
  setCookie(key, value)
}

export const readCookie = (key: string) => {
  let cookie = getCookie(key)

  return cookie
}

export const removeCookie = (key: string) => {
  deleteCookie(key)
}
