import React from 'react';
import './App.css';
import QuestionBox from './QuestionBox';

function App() {
  return (
    <div className="App">
      <h1 className='header'>Rejection!</h1>
      <div className="scores-container">
				{/*<ScoreBox />
				<ScoreBox />*/}
      </div>
      <div className="question-container">
				<QuestionBox />
      </div>

    </div>
  );
}

export default App;
