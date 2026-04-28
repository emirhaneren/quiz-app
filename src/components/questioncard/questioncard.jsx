import React from 'react';
import './questioncard.css';
import { useState,useEffect } from 'react';

const QuestionCard = ({ questionData, score, setScore, count, setCount, modal, setModal }) => {
    
    const[timer, setTimer] =useState(30);

    const approvedChoise = (e) => {
        const checkAnswer = e.currentTarget.value === questionData[count].correct_answer;
        console.log(checkAnswer);
        if (checkAnswer) {
            setScore(score + 100);
        }

        setCount(count + 1);

        if (count === 9) {
            setModal(true); 
        }
        setTimer(30);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            }
            if ( timer === 0 && count < 10) {
                setCount(count + 1);
                setTimer(30);
            }else if(count >=10){
                setModal(true);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [timer, count, setModal, setCount]);

    return (
        <div className="questioncard">
            <div className="questioncard-timer">{timer}</div>
            <div className="questioncard-title">Question {count + 1}/10</div>
            <div className="questioncard-title">{questionData[count]?.question}</div>
            {
                questionData[count]?.answers.map((answer, index) => (
                    <button onClick={approvedChoise} key={index} value={answer} >{answer}</button>
                ))
            }
        </div>
    );
}
export default QuestionCard;
