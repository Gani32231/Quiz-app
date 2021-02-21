import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";
import './EndScreen.css';

const EndScreen = () => {
  const { score, setScore, setGameState, userName } = useContext(
    GameStateContext
  );

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>{userName}</h3>
      <h1>
        {score} / {Questions.length}
      </h1>

     <div className="es__answer">
                    <p className="es__anq" >The correct Answers for the quiz are</p>
                    <ol>
                        {Questions.map((item, index) => (
                            <li className='options'
                                key={index}>
                                    {item.answ}
                            </li>
                            ))}
                    </ol>
                    </div>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
