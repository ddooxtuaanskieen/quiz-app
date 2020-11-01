import React, { useContext, useEffect } from 'react'
import classNames from 'classnames'
import QnaContext from '../contexts/QnaContext'
import Question from './Question'
import Option from './Option'
import './Qna.css'

export default function (props) {
    let { qnas,
        currentQna, setCurrentQna,
        score, setScore,
        isAnswered, setIsAnswered } = useContext(QnaContext)

    let handleOptionClick = (option) => {
        if (option.isCorrect) setScore(score + 1)
        setIsAnswered(true)
    }

    let handleNextClick = function () {
        if (currentQna < qnas.length - 1) {
            setCurrentQna(currentQna + 1)
            setIsAnswered(false)
        }
        else {
            alert(`Your score: ${score}/${qnas.length}`)
        }

    }

    useEffect(() => {
        console.log('Mounted')
    }, [])
    
    if (!qnas || qnas.length === 0) return (null)
    return (<div className="Qna">
        <Question
            value={qnas[currentQna].question}>
        </Question>
        <div className="options-group">
            {
                isAnswered ?
                    qnas[currentQna].options.map((x, index) => <Option
                        key={index}
                        className={classNames('Option', {
                            correct: x.isCorrect
                        })}
                        data={x}>
                    </Option>)
                    :
                    qnas[currentQna].options.map((x, index) => <Option
                        key={index}
                        handleOptionClick={handleOptionClick}
                        data={x}>
                    </Option>)
            }

        </div>
        <div>
            Question: {currentQna + 1} / {qnas.length}
        </div>
        {
            isAnswered &&
            <div className="button-group">

                <button className="next" onClick={() => handleNextClick()}>
                    {currentQna === qnas.length - 1 ? 'Finish' : 'Next'}
                </button>
            </div>
        }

    </div>)
}