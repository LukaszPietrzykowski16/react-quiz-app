import React, { useState } from 'react';
import './App.css';
import questions from './questions.js'



function App() {

  const [result, setResult] = useState(0);

  return (
    <div className="App">
      {questions[result].question}
      <br></br>
      <button onClick={() => setResult(result + 1)}> {questions[result].answer1} </button>
      <button onClick={() => setResult(result + 1)}> {questions[result].answer2} </button>
      <button onClick={() => setResult(result + 1)}> {questions[result].answer3} </button>
      <button onClick={() => setResult(result + 1)}> {questions[result].answer4} </button>
    </div>
  );
}

export default App;
