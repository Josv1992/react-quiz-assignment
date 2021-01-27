import React, { useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actionTypes';
import questionsData from './../../assets/questions.json';
import './Quiz.css';


export const Quiz = () => {
  const questions = questionsData["questions"];
  const score = useSelector(state => state.pReducer.score);
  const currentQuestion = useSelector(state => state.gReducer.currentQuestion);
  const questionAnswered = useSelector(state => state.gReducer.questionAnswered);
  const answeredCorrectly = useSelector(state => state.gReducer.lastAnswerCorrect);
  const dispatch = useDispatch();


  const handleAnswerClick = (isCorrectBool) => {
    if (isCorrectBool) {
      incrementScore();
      setQuestionAnswered(true);
    } else {
      setQuestionAnswered(false);
    }
  }

  const setQuestionAnswered = useCallback((bool) => dispatch({type: 'SET_QUESTION_ANSWERED', value: bool}),
    [dispatch]
  )

  const incrementScore = useCallback(
    () => dispatch({type: 'INCREMENT_SCORE', value: 1}),
    [dispatch],
  )

  const nextButtonLogic = () => {
    if (currentQuestion + 1 === questions.length) {
      endQuiz();
    }
    nextQuestion();
  }

  const endQuiz = useCallback(
    () => dispatch({type: 'SET_GAMESTATE', value: 2}),
    [dispatch],
  )

  const nextQuestion = useCallback(
    () => dispatch({type: 'NEXT_QUESTION', value: 1}),
    [dispatch],
  )

  const NextButton = () => {
    if (questionAnswered) {
      return <button onClick={() => nextButtonLogic()}>Next</button>
    } else {
      return <></>;
    }
  }


  const AnswerResult = () => {
    if (questionAnswered) {
      if (answeredCorrectly) {
        return (<div className="result-section" ><h1>Correct answer!</h1></div>)
      } else {
        return (<div className="result-section" ><h1>Wrong answer</h1></div>)
      }
    } else {
      return <div className="result-section" ></div>;
    }
  }

  const highLightAnswer = (answerCorrect) => {
    if (questionAnswered && answerCorrect) {
      return 'highlight-correct'
    } else if (questionAnswered && !answerCorrect) {
      return 'highlight-false'
    }
  }

  return (
  <div>
    <div className="question-count">
      <span>Question {currentQuestion + 1}</span>/{questions.length}
    </div>
    {score === 0 &&
      <h1>Current score: {score} points</h1>
    }
    {score > 1 &&
      <h1>Current score: {score} points</h1>
    }
    {score === 1 &&
      <h1>Current score: {score} point</h1>
    }
    
      <div className="question-section">

      <h1 className="question-text">
        {questions[currentQuestion].questionText}
      </h1>
    </div>

    <div className="answer-section">
      {questions[currentQuestion].answerOptions.map((answerOption) => (
        <button
          className={`answer-button ${highLightAnswer(answerOption.isCorrect)}`}
          disabled={questionAnswered}
          key={answerOption.answerText}
          onClick={() => handleAnswerClick(answerOption.isCorrect)}
        >
          {answerOption.answerText}
        </button>
      ))}
    </div>    
      <AnswerResult />
      <NextButton />
  </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.score,
    currentQuestion: state.currentQuestion,
    answeredCorrectly: state.lastAnswerCorrect
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onIncrementScore: () => dispatch({type: actionTypes.INCREMENT_SCORE}),
      onNextQuestion: () => dispatch({type: actionTypes.NEXT_QUESTION}),
      onSetQuestionAnswered: () => dispatch({type: actionTypes.SET_QUESTION_ANSWERED})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
