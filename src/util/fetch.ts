import { ModalsDispatchContext } from "context/contexts"
import { useContext } from "react"

const baseurl = 'http://localhost:8080'

export const fetchGet = async (path: string, params = {}, headers = {}) => {
  const url = baseurl + path + '?' + new URLSearchParams(params).toString()

  const res = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    }
  })

  if (res.ok)
    return res.json()

  throw new Error(res.statusText, { cause: res.status })
}

export const fetchPost = async (path: string, params = {}, headers = {}) => {
  const url = baseurl + path

  const res = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })

  if (res.ok)
    return res.json()

  throw new Error(res.statusText, { cause: res.status })
}

export const fetchPut = async (path: string, params = {}, headers = {}) => {
  const url = baseurl + path

  const res = await fetch(url, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })

  if (res.ok)
    return res.json()

  throw new Error(res.statusText, { cause: res.status })
}

export const fetchDelete = async (path: string, params = {}, headers = {}) => {
  const url = baseurl + path

  const res = await fetch(url, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })

  if (res.ok)
    return res.json()

  throw new Error(res.statusText, { cause: res.status })
}

const uploadFiles = async (path: string, formData: FormData) => {
  const url = baseurl + path
  const option = {
    method: 'POST',
    body: formData,
  }

  const res = await fetch(url, option)
  if (res.ok)
    return res.json()

  throw new Error(res.statusText, { cause: res.status })

  // const photos = document.querySelector('input[type="file"][multiple]')
  // const formData = new FormData()

  // formData.append("title", "My Vegas Vacation")

  // for (const [i, photo] of Array.from(photos.files).entries()) {
  //     formData.append(`photos_${i}`, photo)
  // }
  // uploadFiles('/upload',formData)
}
