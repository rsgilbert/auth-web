import React from "react"


export const DangerAlert = props => {
    if (!props.message) return null
    return (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded my-1" role="alert">
            {props.message}
        </div>
    )
}
