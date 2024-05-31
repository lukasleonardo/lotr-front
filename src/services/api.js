import axios from 'axios';

const api = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
})

api.interceptors.request.use(async config=>{
  const token = 'VeLNI7RnoVmiX5-ZjapS'
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default api