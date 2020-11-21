import axios from 'axios'
import React, { useEffect, useState } from 'react'
import QnaContext from '../contexts/QnaContext'

export default function (props) {
    let { children } = props
    let [qnas, setQnas] = useState([])
    let [currentQnaIndex, setCurrentQnaIndex] = useState(0)
    let [qnaStatus, setQnaStatus] = useState(-1)
    let [score, setScore] = useState(0)
    let [selectedIndex, setSelectedIndex] = useState(-1)
    let [isCompleted, setIsCompleted] = useState(false)
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
            currentQnaIndex, setCurrentQnaIndex,
            qnaStatus, setQnaStatus,
            score, setScore,
            selectedIndex, setSelectedIndex,
            isCompleted, setIsCompleted
        }
        }>
            {children}
        </QnaContext.Provider>
    )
}