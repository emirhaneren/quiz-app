import React from 'react';
import './quiz.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as API from '../../apis/api';
import QuestionCard from '../../components/questioncard/questioncard';
import Modal from '../../components/modal/modal';

const Quiz = () => {
    const {difficulty, amount} = useParams();
    const [quizQuestions, setQuizQuestions] = React.useState([]);
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const getQuizQuestions = async () => {
            const data = await API.fetchQuizQuestions(difficulty, amount);
            setQuizQuestions(data);
        }
        getQuizQuestions();
    }, [difficulty, amount])

    console.log(quizQuestions);

    return (
        <div className='quiz'>
            {
                modal ? <Modal score={score}/> :
                <QuestionCard
                questionData={quizQuestions}
                score={score}
                setScore={setScore}
                count={count}
                setCount={setCount}
                modal={modal}
                setModal={setModal}/>
            }
            
        </div>
    );
}

export default Quiz;