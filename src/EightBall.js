import React, {useState} from "react";
import "./EightBall.css";
import defaultAnswers from "./answers.json";
import { choice } from "./random";

function EightBall({ answers = defaultAnswers }) {
    const [answer, setAnswer] = useState({msg: "Think of a question", color: "black"});

    function handleClick(evt) {setAnswer(choice(answers))}

    return (
        <div>
            <button onClick ={handleClick} className="EightBall" style={{ backgroundColor: answer.color}}>
                <p className="EightBall-text">{answer.msg}</p>
            </button>
        </div>
    )
}

export default EightBall;