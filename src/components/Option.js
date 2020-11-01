import React, { useState } from 'react'
import './Option.css'

export default function (props) {
    let { data, handleOptionClick, className } = props
    if (handleOptionClick)
        return (<div className="Option" onClick={() => handleOptionClick(data)}>
            {data.text}
        </div>)
    else
        return (<div className="Option">
            {data.text}
        </div>)

}