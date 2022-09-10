import React from 'react'

export const Login = () => {

    return (
        <div>
            <section class="px-6 max-w-sm m-[auto]">
                <div className='py-5'>
                    <h1 className="text-xl font-bold text-center">Login</h1>

                    <div>
                        <form>
                            {/* email input */}
                            <InputBox
                                label="Email"
                                type="text"
                            />

                            {/* Password input */}
                            <InputBox
                                label="Password"
                                type="password"
                            />

                            <a href="#" className="text-blue-800">Forgot Password?</a>


                            <div className="lg:text-left">
                                <button type='button' className='inline-block w-full px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug rounded uppercase shadow-md
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

export const InputBox = (props) => {
    return (
        <div className="mb-6">
            <label className="text-xl">{props.label}</label>
            <input
                type={props.type}
                placeholder={props.label}
                className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-gray-300 rounded transition ease-in-out m-0 
                focus:outline-none focus:text-gray-700 focus:bg-white focus:border-green-500'
            />
        </div>
    )
}