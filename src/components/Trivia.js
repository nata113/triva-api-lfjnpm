import { useEffect } from "react";
import { useState } from "react"
import Pyramid from "./Pyramid";
import SingleQuestions from "./SingleQuestions";
import Timer from "./Timer";
import Navbar from "./Navbar";
import { BiExit } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import { browserHistory } from 'react-router';

export default function Trivia({ questions, setQuestions, changeGanancia, setStop }) {

    const history=useHistory();
    const [currOption, setCurrOption] = useState(0);
    const [answers, setAnswers] = useState();

    useEffect(() => {
        setAnswers
            (questions &&
                handleRandom([
                    questions[currOption]?.correct_answer,
                    ...questions[currOption]?.incorrect_answers])
            );

    }, [currOption, questions]);

    const handleRandom = (options) => {
        return options.sort(() => Math.random() - 0.5);
    }


    return (
        <div className="app">
            <div className="main">
                <Navbar />
                <div className="top">
                    <div className="timer">
                        <Timer setStop={setStop} currOption={currOption} />
                    </div>
                </div>
                <div className="bottom">
                    <SingleQuestions
                        currOption={currOption}
                        setCurrOption={setCurrOption}
                        questions={questions}
                        answers={answers}
                        correct={questions[currOption]?.correct_answer}
                        setQuestions={setQuestions}
                        setStop={setStop}
                    />
                </div>

            </div>
           
            <div className="pyramid">
                <div className="topp">
                <a href="./">
                 <BiExit className="menu-icon"/>
                  </a>
                 </div>
                <Pyramid
                    currOption={currOption}
                />                               
            </div>
        </div> 
 
 
    )
}