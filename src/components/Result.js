import React from 'react'
import './Result.css'

export default function (props) {
    let { data } = props
    return <div>
        <h3>
            {data.correct / (data.correct + data.wrong) > 1 / 3 ? 'Brilliant!' : 'Well done!'}
        </h3>
        <p>
            <table>
                <tbody>
                    <tr>
                        <td className="left-table">Quiz:</td>
                        <td className="right-table">What do you know about Vietnam?</td>
                    </tr>
                    <tr>
                        <td className="left-table">Total questions:</td>
                        <td className="right-table">{data.correct + data.wrong}</td>
                    </tr>
                    <tr>
                        <td className="left-table">Correct answers:</td>
                        <td className="right-table correct">{data.correct}</td>
                    </tr>
                    <tr>
                        <td className="left-table">Wrong answers:</td>
                        <td className="right-table wrong">{data.wrong}</td>
                    </tr>
                </tbody>

            </table>
            {/* Quiz: <b>What do you know about Vietnam?</b> <br />
            Total questions: <b>{data.correct + data.wrong}</b> <br />
            Correct answers: <b>{data.correct}</b> <br />
            Wrong answers: <b>{data.wrong}</b> */}
        </p>
        <a href="/">
            Let's try again
        </a>
        <br />
        <a href="#">
            Try another quiz
        </a>
    </div >
}