import React, { useState } from 'react';
import './App.css';
import questions from './questions.js'



function App() {

  const [game, setGame] = useState(true); 
  const [result, setResult] = useState(0);
  const [end, setEnd] = useState(1);

  function nextQuestion(e){
    if (questions[result].answer1[e] === true) {
      setEnd(end + 1)
    }
    if (result === 9) {
      setGame(false);
    }
    setResult(result + 1);
    // console.log(questions.length) it's 11
    // console.log(result);
    console.log(end)
  }

  return (
    <div className="App">
      <div className={game === true ? 'game-on' : 'game-off'}>
      {questions[result].question}
      <br></br>
      <button onClick={(e) => nextQuestion(1)}> {questions[result].answer1} </button>
      <button onClick={(e) => nextQuestion(2)}> {questions[result].answer2} </button>
      <button onClick={(e) => nextQuestion(3)}> {questions[result].answer3} </button>
      <button onClick={(e) => nextQuestion(4)}> {questions[result].answer4} </button>
      </div>
      <div className={game === false ? 'result-on' : 'result-off'}>
        Your score: {end}
      </div>
    </div>
  );
}

export default App;
