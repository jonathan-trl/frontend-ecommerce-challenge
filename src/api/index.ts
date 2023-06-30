import axios from 'axios'

const url = process.env.NEXT_PUBLIC_API_URL

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL })

export default api
