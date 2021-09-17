import { useEffect } from "react";
import { useState } from "react"

import React from 'react'

const SingleQuestions = ({ currOption, setCurrOption, questions, answers, correct, setQuestions, setStop }) => {

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");


    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };

    const handleSelect = (i) => {
        if (selectedAnswer === i && selectedAnswer === correct)
            return "correct";
        else if (selectedAnswer === i && selectedAnswer !== correct)
            return "wrong";
    }

    const handleClick = (i) => {
        setSelectedAnswer(i);
        setClassName("answer active");
        delay(3000, () => {
            if (i === correct) {
                setSelectedAnswer(null);
                setClassName("answer correct");
                
            } else {
                setClassName("answer wrong");
                setStop(true);
            }
            
            if(currOption > 8){
                setStop(true);
            }
            setCurrOption((prev) => prev + 1);
        });
    };

    return (

        <div className="trivia">

            <div className="question">{questions[currOption].question}</div>
            <div className="answers">
                {
                    answers && answers.map(i => (
                        <div className={`answer  ${selectedAnswer && handleSelect(i)}`}
                            key={i}
                            onClick={() => handleClick(i)}
                            disable={selectedAnswer}
                        >{i}
                        </div>
                    ))
                }
            </div>

        </div>
    )
};

export default SingleQuestions


