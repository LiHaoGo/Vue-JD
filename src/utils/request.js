import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/04987b0f3224e8762827aa36bd1d0b67/jingdong',
  timeout: 10000
})
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-unused-expressions
    instance.get(url, params, {
    }).then((response) => {
      resolve(response.data)
    // eslint-disable-next-line no-sequences
    }), err => {
      reject(err)
    }
  })
}
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-unused-expressions
    instance.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response.data)
    // eslint-disable-next-line no-sequences
    }), err => {
      reject(err)
    }
  })
}
