import React from "react";
import './modal.css';

const Modal = ({ score }) => {
    return (
        <div className="modal">
            <h2>Quiz Completed!</h2>
            <p>Your final score is: {score}</p>
            <div className="modal-button" onClick={() => window.location='/'}>Play Again ? </div>
        </div>
    );
}

export default Modal;