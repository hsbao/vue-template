import cookie from 'js-cookie'

export const getToken = () => {
    return cookie.get('token') || ''
}

export const checkLogin = () => {
    const token = getToken()
    return !!token
}