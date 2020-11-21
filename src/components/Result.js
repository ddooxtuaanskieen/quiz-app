import React from 'react'

export default function (props) {
    let { data } = props
    return <div>
        <p>
            Correct answers: {data.correct}
        </p>
        <p>
            Wrong answers: {data.wrong}
        </p>
        <a href="/">
            Let's try again
        </a>
    </div >
}