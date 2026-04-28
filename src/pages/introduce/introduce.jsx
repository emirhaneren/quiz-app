import React from 'react';
import logo from "../../assets/logo.png";
import './introduce.css';
import Dropdown from '../../components/dropdown/dropdown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Introduce = () => {

    const Difficulty = ["easy", "medium", "hard"];
    const [difficultyChange, setDifficultyChange] = useState('');
    const navigate = useNavigate();
    const TOTAL_QUESTIONS = 10;

    const startQuiz = () => {
        if (difficultyChange) {
            navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
        }
    }

    return (
        <div className='introduce'>
            <div className="introduce-container">
                <img width="300px" src={logo} alt="logo"/>
                <Dropdown data={Difficulty} setDifficultyChange={setDifficultyChange}/>
                <div className="introduce-button" onClick={startQuiz}>Start Quiz !</div>
            </div>
        </div>
    );
}
export default Introduce;