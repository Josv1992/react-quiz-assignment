import React, { useState, useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actionTypes';
import questionsData from './../../assets/questions.json';


export const Quiz = () => {
  const questions = questionsData["questions"];
  const score = useSelector(state => state.str.score);
  const name = useSelector(state => state.str.name);
  const currentQuestion = useSelector(state => state.str.currentQuestion);
  const questionAnswered = useSelector(state => state.str.questionAnswered);
  const answeredCorrectly = useSelector(state => state.str.answeredCorrectly);
  const dispatch = useDispatch();


  const handleAnswerClick = (isCorrectBool) => {
    if (isCorrectBool) {
      incrementScore();
      setQuestionAnswered(true);
    } else {
      setQuestionAnswered(false);
    }
  }


  const setQuestionAnswered = useCallback((bool) => dispatch({type: 'SETQUESTIONANSWERED', value: bool}),
    [dispatch]
  )

  const incrementScore = useCallback(
    () => dispatch({type: 'INCREMENTSCORE', value: score}),
    [dispatch],
  )

  const nextQuestion = useCallback(
    () => dispatch({type: 'NEXTQUESTION', value: currentQuestion}),
    [dispatch],
  )

  const NextButton = () => {
    if (questionAnswered) {
      return <button onClick={() => nextQuestion()}>Next</button>
    } else {
      return <></>;
    }
  }

  const AnswerResult = () => {
    if (questionAnswered) {
      if (answeredCorrectly) {
        return <h1>Well done!</h1>
      } else {
        return <h1>Wrong answer</h1>
      }
    } else {
      return <></>;
    }
  }

  return (
  <div>
    <h1>{name}, you have: {score} points</h1>
      <AnswerResult />
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
          disabled={questionAnswered}
          key={answerOption.answerText}
          onClick={() => handleAnswerClick(answerOption.isCorrect)}
        >
          {answerOption.answerText}
        </button>
      ))}
    </div>
      <NextButton />
  </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.score,
    currentQuestion: state.currentQuestion,
    answeredCorrectly: state.answeredCorrectly
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onIncrementScore: () => dispatch({type: actionTypes.INCREMENTSCORE}),
      onNextQuestion: () => dispatch({type: actionTypes.NEXTQUESTION}),
      onSetQuestionAnswered: () => dispatch({type: actionTypes.SETQUESTIONANSWERED})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
