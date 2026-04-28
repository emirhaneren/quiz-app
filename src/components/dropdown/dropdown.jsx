import React from "react";
import './dropsown.css';

const Dropdown = ({data,setDifficultyChange}) => {
    return (
        <div className="dropdown-container">
            <select className="dropdown-select" onChange={e => setDifficultyChange(e.target.value)} name='' id=''>
                {
                    data.map((item,index) => (
                        <option value={item}>{item}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Dropdown;