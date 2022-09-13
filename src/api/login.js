import axios from "axios"

const authApi = 'http://localhost:3001'

/**
 * 
 * @param {LoginCredentials} credentials 
 */
export const login = async credentials => {
    try {
        const response = await axios({
            method: 'post',
            url: `${authApi}/auth/login`,
            data: credentials
        })
        console.log('response', response)
    }
    catch (e) {
        let returnErrors = {}
        let errors
        console.log('foun error', e.response.data)
        if(errors = e.response?.data?.errors) {
            errors.forEach(err => {
                returnErrors[err.param] = err.msg
            })
            returnErrors['general'] = `Error in ${errors.length} of the fields`
            throw Error(JSON.stringify(returnErrors))
        }
        if(e.response?.data) {
            returnErrors = {general: e.response?.data}
            throw Error(JSON.stringify(returnErrors))
        }
        throw Error(JSON.stringify({general: e.message }))
    }

}