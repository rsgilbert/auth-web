import React, { useState } from 'react'
import { login } from '../api/login'

export const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        general: ''
    })

    const handleSubmit = async e => {
        e.preventDefault()
        console.log('submitted', credentials)
        try {
            await login(credentials)
        }
        catch (e) {
            console.log(e.message)
            setErrors(JSON.parse(e.message))
        }
    }

    const onChangeField = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <section className="px-6 max-w-sm m-[auto]">
                <div className='py-5'>
                    <h1 className="text-xl font-bold text-center">Login</h1>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <DangerAlert message={errors.general} />

                            {/* email input */}
                            <InputBox
                                label="Email"
                                type="text"
                                name="email"
                                error={errors.email}
                                value={credentials.email}
                                onChange={onChangeField}
                            />

                            {/* Password input */}
                            <InputBox
                                label="Password"
                                type="password"
                                name="password"
                                error={errors.password}
                                value={credentials.password}
                                onChange={onChangeField}
                            />

                            <a href="#" className="text-blue-800">Forgot Password?</a>


                            <div className="lg:text-left">
                                <button type='submit' className='inline-block w-full px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug rounded uppercase shadow-md
                                    hover:bg-blue-700 hover:shadow-lg
                                     focus:shadow-lg focus:outline-none focus:ring-0 
                                    active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out'>
                                    Login
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">Don't have an account? <a className='text-red-600 hover:text-red-700 ' href="#">Register</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export const DangerAlert = props => {
    if (!props.message) return null
    return (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded my-1" role="alert">
            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
            {props.message}
        </div>
    )
}

export const InputBox = (props) => {
    return (
        <div className="mb-6">
            <label className="text-xl">{props.label}</label>
            <input
                name={props.name}
                type={props.type}
                placeholder={props.label}
                className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-gray-300 rounded transition ease-in-out m-0 
                focus:outline-none focus:text-gray-700 focus:bg-white focus:border-green-500'
                onChange={props.onChange}
            />
            { props.error && <p className="text-red-500 text-xs italic">{props.error}</p> }
        </div>
    )
}