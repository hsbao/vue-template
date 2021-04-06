const devBaseURL = "your development baseURL"
const proBaseURL = "your production baseURL"
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL

console.log(process.env.NODE_ENV, BASE_URL)
export const TIMEOUT = 10000
