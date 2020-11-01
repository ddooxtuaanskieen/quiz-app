import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QnaContext from '../contexts/QnaContext'

let allQuestion = [
    {
        question: 'Which country is not neighbour of Vietnam?',
        options: [
            { text: 'China', 'isCorrect': false },
            { text: 'Cambodia', 'isCorrect': false },
            { text: 'Thailand', 'isCorrect': true },
            { text: 'Laos', 'isCorrect': false }
        ]
    },
    {
        question: 'In 2020, which team does s1mple play for?',
        options: [
            { text: 'Team Liquid', 'isCorrect': false },
            { text: 'Natus Vincere', 'isCorrect': true },
            { text: 'Astralis', 'isCorrect': false },
            { text: 'G2', 'isCorrect': false }
        ]
    }
]

export default function (props) {
    let { children } = props
    let [qnas, setQnas] = useState([])
    let [currentQna, setCurrentQna] = useState(0)
    let [score, setScore] = useState(0)
    let [isAnswered, setIsAnswered] = useState(false)
    useEffect(() => {
        async function getQna(){
            let res = await axios.get('https://5f8fc9dc693e730016d7b6e7.mockapi.io/qnas')
            setQnas(res.data)
        }
        getQna()
    }, [])
    return (
        <QnaContext.Provider value={{
            qnas, 
            currentQna, setCurrentQna, 
            score, setScore,
            isAnswered, setIsAnswered
        }
        }>
            {children}
        </QnaContext.Provider>
    )
}