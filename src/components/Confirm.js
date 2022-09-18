import React, { useState } from 'react'
import { confirm } from '../api/auth'
import { errorMessageFor } from '../api/utils'
import { DangerAlert } from './Alerts'
import { InputBox } from './InputBox'

export const Confirm = () => {
    const [form, setForm] = useState({
        email: '',
        confirmation_code: ''
    })
    const [error, setError] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await confirm(form)
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
                    <h1 className="text-xl font-bold text-center">Confirm</h1>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <DangerAlert message={error} />

                            <InputBox
                                label="Email"
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={onChangeField}
                            />

                            <InputBox
                                label="Confirmation Code"
                                type="test"
                                name="confirmation_code"
                                value={form.confirmation_code}
                                onChange={onChangeField}
                            />
                            <div className="lg:text-left">
                                <button type='submit' className='inline-block w-full px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug rounded uppercase shadow-md
                                    hover:bg-blue-700 hover:shadow-lg
                                     focus:shadow-lg focus:outline-none focus:ring-0 
                                    active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out'>
                                    Confirm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
