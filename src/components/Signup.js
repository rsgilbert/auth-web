import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../api/auth'
import { errorMessageFor } from '../api/utils'
import { DangerAlert } from './Alerts'
import { InputBox } from './InputBox'

export const Signup = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            setError('')
            await signup(form)
            navigate(`/confirm?email=${form.email}`)
        }
        catch (e) {
            setError(errorMessageFor(e))
        }
    }

    const onChangeField = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <section className="px-6 max-w-sm m-[auto]">
                <div className='py-5'>
                    <h1 className="text-xl font-bold text-center">Signup</h1>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <DangerAlert message={error} />

                            {/* email input */}
                            <InputBox
                                label="Email"
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={onChangeField}
                            />

                            {/* Password input */}
                            <InputBox
                                label="Password"
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={onChangeField}
                            />

                            <div className="lg:text-left">
                                <button type='submit' className='inline-block w-full px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug rounded uppercase shadow-md
                                    hover:bg-blue-700 hover:shadow-lg
                                     focus:shadow-lg focus:outline-none focus:ring-0 
                                    active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out'>
                                    Signup
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">Have an account? <a className='text-red-600 hover:text-red-700 ' href="/login">Login</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
