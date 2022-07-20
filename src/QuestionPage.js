import React from "react";
import QuizImage from "./components/QuizImage.js";
import QuestionBox from "./components/QuestionBox.js";
import "./QuestionPage.css";

export default function QuestionPage(props) {
  const { questions, userName, score, setScore, setQuestions } = props;

  const [options, setOptions] = React.useState([]);
  const [currQues, setCurrQues] = React.useState(0);

  React.useEffect(() => {
    setOptions(() => {
      let a = Math.floor(Math.random() * 4);
      let newArr = [...questions[currQues].incorrect_answers];
      newArr.splice(a, 0, questions[currQues].correct_answer);
      return newArr;
    });
  }, [currQues]);

  function handleScore() {}

  return (
    <div className="questionPage">
      <QuizImage />
      <div className="welcome">
        <div>{`Welcome, ${userName}`}</div>
      </div>
      <div className="topicScore">
        <div className="topic">{`Topic: ${questions[currQues].category}`}</div>
        <div className="Score">{`Score: ${score}`}</div>
      </div>
      <QuestionBox
        score={score}
        questions={questions}
        setScore={setScore}
        setQuestions={setQuestions}
        currQues={currQues}
        setCurrQues={setCurrQues}
        options={options}
        setOptions={setOptions}
      />
    </div>
  );
}
