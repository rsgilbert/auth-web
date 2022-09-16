import Cookie from 'js-cookie'

/**
 * Returns true if user is logged in
 * @returns {boolean}
 */
export const isLoggedIn = () => {
    const token = Cookie.get('token')
    return !!token
}