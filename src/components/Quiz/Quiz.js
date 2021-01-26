import React, { useState, useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actionTypes';
import questionsData from './../../assets/questions.json';


export const Quiz = () => {
  const questions = questionsData["questions"];
  const score = useSelector(state => state.str.score);
  const currentQuestion = useSelector(state => state.str.currentQuestion);
  const dispatch = useDispatch();

  const handleAnswerClick = (isCorrectBool) => {
    // TODO: disable other option, show next button
    if (isCorrectBool) {
      console.log('correct');
      incrementScore();
      // TODO: Congratulations
    }
  }

  const incrementScore = useCallback(
    () => dispatch({type: 'INCREMENTSCORE', value: score}),
    [dispatch],
  )

  const nextQuestion = useCallback(
    () => dispatch({type: 'NEXTQUESTION', value: currentQuestion}),
    [dispatch],
  )

  return (
  <div>
    <h1>{score}</h1>
      <div className="question-section">
      <div className="question-count">
        <span>Question {currentQuestion + 1}</span>/{questions.length}
      </div>
      <div className="question-text">
        {questions[currentQuestion].questionText}
      </div>
    </div>

    <div className="answer-section">
      {questions[currentQuestion].answerOptions.map((answerOption) => (
        <button
          key={answerOption.answerText}
          onClick={() => handleAnswerClick(answerOption.isCorrect)}
        >
          {answerOption.answerText}
        </button>
      ))}
    </div>

    <button onClick={() => nextQuestion()}>Next</button>
  </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.score,
    currentQuestion: state.currentQuestion
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onIncrementScore: () => dispatch({type: actionTypes.INCREMENTSCORE}),
      onNextQuestion: () => dispatch({type: actionTypes.NEXTQUESTION})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
