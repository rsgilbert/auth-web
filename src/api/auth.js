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
        data: credentials
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
        data: credentials
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
        data: credentials
    })
}