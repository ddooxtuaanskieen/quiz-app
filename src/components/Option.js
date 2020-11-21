import React from 'react'
import className from 'classnames'
import './Option.css'

export default function (props) {
    let { data, index, isSelected, handleOptionClick } = props
    if (handleOptionClick)
        return (<div className="Option" onClick={() => handleOptionClick(data, index)}>
            {data.text}
        </div>)
    else {
        if (isSelected !== undefined) {
            return (<div className={className('Option', {
                wrong: isSelected,
                correct: data.isCorrect
            })}>
                {data.text}
            </div>)
        }
        else {
            return (<div className={className('Option', {
                correct: data.isCorrect
            })}>
                {data.text}
            </div>)
        }
    }


}