import React, { useContext } from 'react';
import QnaContext from '../contexts/QnaContext';
import Option from './Option';
import './Qna.css';
import Question from './Question';
import Result from './Result';

export default function (props) {
    let { qnas,
        currentQnaIndex, setCurrentQnaIndex,
        qnaStatus, setQnaStatus,
        score, setScore,
        selectedIndex, setSelectedIndex,
        isCompleted, setIsCompleted } = useContext(QnaContext)

    let handleOptionClick = (optionData, optionIndex) => {
        setSelectedIndex(optionIndex)
        if (optionData.isCorrect) {
            setQnaStatus(1)
            setScore(score + 1)
        }
        else {
            setQnaStatus(0)
        }
    }

    let handleNextClick = function () {
        setSelectedIndex(-1)
        if (currentQnaIndex < qnas.length - 1) {
            setCurrentQnaIndex(currentQnaIndex + 1)
            setSelectedIndex(-1)
            setQnaStatus(-1)
        }
        else {
            setIsCompleted(true)
        }
    }

    if (!qnas || qnas.length === 0) return (
        <div className="loader">
            
        </div>)
    if (isCompleted) return (
        <Result
            data={{ correct: score, wrong: qnas.length - score }}>
        </Result>)
    return (<div className="Qna">
        <Question
            value={`Question ${currentQnaIndex + 1}/${qnas.length}: ${qnas[currentQnaIndex].question}`}
        >
        </Question>
        <div className="options-group">
            {
                qnaStatus === -1 ?
                    //Chua tra loi
                    qnas[currentQnaIndex].options.map((x, index) => <Option
                        key={index}
                        data={x}
                        index={index}
                        handleOptionClick={handleOptionClick}
                    >
                    </Option>)
                    :
                    ((qnaStatus === 0) ?
                        //Sai
                        qnas[currentQnaIndex].options.map((x, index) => <Option
                            key={index}
                            data={x}
                            index={index}
                            isSelected={index === selectedIndex}>
                        </Option>)
                        :
                        //Dung
                        qnas[currentQnaIndex].options.map((x, index) => <Option
                            data={x}
                            key={index}
                            index={index}
                        >
                        </Option>)
                    )
            }
        </div>
        <div>

        </div>
        {
            qnaStatus !== -1 &&
            <div className="button-group">
                <button className="next" onClick={() => handleNextClick()}>
                    {currentQnaIndex === qnas.length - 1 ? 'Finish' : 'Next'}
                </button>
            </div>
        }

    </div>)
}