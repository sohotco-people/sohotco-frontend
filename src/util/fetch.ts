const baseurl = 'http://localhost:8080'

export const fetchGet = async (path: string, params = {}, headers = {}) => {
  const url = baseurl + path + '?' + new URLSearchParams(params).toString()
  const option = {
    method: 'GET',
    credentials: 'include',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      // cookie 라는 key는 안됨
    }
  } as RequestInit

  try {
    const res = await fetch(url, option)
    return res.json()
  } catch (e) {
    console.log('error: ', e)
  }
}

export const fetchPost = async (path: string, params = {}, headers = {}) => {
  const url = baseurl + path
  const option = {
    method: 'POST',
    credentials: 'include',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  } as RequestInit

  try {
    const res = await fetch(url, option)
    return res.json()
  } catch (e) {
    console.log('error: ', e)
  }
}

export const fetchPut = async (path: string, params = {}, headers = {}) => {
  const url = baseurl + path
  const option = {
    method: 'PUT',
    credentials: 'include',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  } as RequestInit

  try {
    const res = await fetch(url, option)
    return res.json()
  } catch (e) {
    console.log('error: ', e)
  }
}

const uploadFiles = async (path: string, formData: FormData) => {
  const url = baseurl + path
  const option = {
    method: 'POST',
    body: formData,
  }

  try {
    const res = await fetch(url, option)
    return res.json()
  } catch (e) {
    console.log('error: ', e)
  }

  // const photos = document.querySelector('input[type="file"][multiple]')
  // const formData = new FormData()

  // formData.append("title", "My Vegas Vacation")

  // for (const [i, photo] of Array.from(photos.files).entries()) {
  //     formData.append(`photos_${i}`, photo)
  // }
  // uploadFiles('/upload',formData)
}
