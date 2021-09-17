import React, { useEffect, useState, useMemo, useContext } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { TriviaContext } from "../Context/TriviaContext";
import Trivia from "./Trivia";

function Questions() {

  const { ganancia, changeGanancia } = useContext(TriviaContext);

  let info = {}
  let awsQestions = []
  const SecondPage = props => {
    const location = useLocation();
    info = location.state.info
  };
  SecondPage();
  const questionURL = `https://opentdb.com/api.php?amount=10&category=${info.categoryId}&difficulty=${info.difficulty}&type=multiple`

  const [questions, setQuestions] = useState();
  const [stop, setStop] = useState(false);

  const fetchAPi = async () => {
    const response = await fetch(questionURL);
    console.log(response.status);
    console.log(response);
    const responseJSON = await response.json();
    awsQestions = responseJSON.results
    console.log(awsQestions);
    setQuestions(awsQestions);
  }

  useEffect(() => {
    fetchAPi();
  }, [])

  return (
   
      <div className="main">
        {!questions ?
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">cargando...</h5>
              <h6 class="card-subtitle mb-2 text-muted">Espere un momento</h6>
            </div>
          </div>
          :
          <>
            {stop ? <h1 className="endText">GANASTE: {ganancia}</h1> : (
              <>
                <Trivia
                  questions={questions}
                  setQuestions={setQuestions}
                  changeGanancia={changeGanancia}
                  setStop={setStop} />
              </>
              
            )}
            
          </>
        }
      </div>
    
  );
}

export default Questions;
