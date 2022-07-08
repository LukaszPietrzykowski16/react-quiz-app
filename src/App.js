import React, { useState } from 'react';
import './App.css';
import questions from './questions.js'



function App() {

  // backend and frontend communication 
  /*
  React.useEffect(() => {

    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then(data => console.log(data))
  }, [])
*/
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
    <>
      <div className={game === true ? 'game-on' : 'game-off'}>
        <div className='question'>
          <h1>{questions[result].question}</h1>
        </div>
        <div className='answer'>
        <button className='button-pad' onClick={(e) => nextQuestion(1)}> {questions[result].answer1} </button>
        <button className='button-pad' onClick={(e) => nextQuestion(2)}> {questions[result].answer2} </button>
        <button className='button-pad' onClick={(e) => nextQuestion(3)}> {questions[result].answer3} </button>
        <button className='button-pad' onClick={(e) => nextQuestion(4)}> {questions[result].answer4} </button>
        </div>
  
      </div>
      <div className={game === false ? 'result-on' : 'result-off'}>
        Your score: {end -1}
      </div>
      </>
  );
}

export default App;
