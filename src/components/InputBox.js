import React from "react"

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