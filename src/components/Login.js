import React from 'react'

export const Login = () => {

    return (
        <div>
            <section class="px-6">
                <div>
                    <div></div>
                    <div>
                        <form>
                            <div>
                                <p className='underline font-bold text-red'>Sign in with</p>
                                <button>Facebook (svg)</button>
                            </div>
                            <div>
                                <p>Or</p>
                            </div>

                            {/* email input */}
                            <div className="mb-6">
                                <input 
                                    type="text"
                                    placeholder='Email address'
                                    className='form-control block w-full px-2'
                                    />
                            </div>

                            {/* Password input */}
                            <div className='mb-6'>
                                <input
                                    type="password"
                                    placeholder='Password'
                                    />
                            </div>

                            <div>
                                <a href="#">Forgot Password</a>
                            </div>

                            <div>
                                <button>
                                    Login
                                </button>
                                <p>Don't have an account? <a href="#">Register</a></p>
                            </div>
                        </form>
                    </div>

                
                </div>
            </section>
        </div>
    )
}