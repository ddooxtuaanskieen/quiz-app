import React from 'react'
import './Question.css'
export default function(props){
    let {value} = props
    return(<div className="Question">
        {value}
    </div>)
}