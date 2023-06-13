import { setCookie, getCookie, deleteCookie } from 'cookies-next'

export const createCookie = (key: string, value: string) => {
  let today = new Date()
  let expireDate = new Date(today)

  expireDate.setDate(expireDate.getDate() + 7)

  setCookie(key, value, { expires: expireDate })
}

export const readCookie = (key: string) => {
  let cookie = getCookie(key)

  return cookie
}

export const removeCookie = (key: string) => {
  deleteCookie(key)
}
