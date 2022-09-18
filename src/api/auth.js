import axios from "axios"

const authApi = 'http://localhost:3001'

/**
 * 
 * @param {LoginCredentials} credentials 
 */
export const confirm = async credentials => {
    const _response = await axios({
        method: 'post',
        url: `${authApi}/auth/confirm`,
        data: credentials,
        withCredentials: true
    })
}

/**
 * 
 * @param {LoginCredentials} credentials 
 */
export const login = async credentials => {
    const _response = await axios({
        method: 'post',
        url: `${authApi}/auth/login`,
        data: credentials,
        withCredentials: true
    })
}

/**
 * 
 * @param {LoginCredentials} credentials 
 */
export const signup = async credentials => {
    const _response = await axios({
        method: 'post',
        url: `${authApi}/auth/signup`,
        data: credentials,
        withCredentials: true
    })
}


export const logout = async () => {
    const _response = await axios({
        method: 'post',
        url: `${authApi}/auth/logout`,
        withCredentials: true
    })
}


/**
 * Returns logged in status of user
 * If we are able to fetch user details of user, then we are logged in,
 * else we are logged out
 * @returns {Promise<LoggedInStatus>}
 */
export const getLoggedInStatus = async () => {
    try {
        const _response = await axios({
            method: 'get',
            url: `${authApi}/user`,
            // withCredentials must be set to true to allow cookies in cross-origin requests and responses
            // see: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
            withCredentials: true 
        })
        console.log(_response.data)
        return 'logged_in'
    }
    catch(e) {
        return 'logged_out'
    }
}