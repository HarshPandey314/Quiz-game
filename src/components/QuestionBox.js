import "./QuestionBox.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function QuestionBox(props) {
  const navigate = useNavigate();
  const {
    questions,
    score,
    setScore,
    setQuestions,
    currQues,
    setCurrQues,
    options,
    setOptions,
  } = props;

  // console.log("123" + options);
  const [selected, setSelected] = React.useState();
  const [error, setError] = React.useState(false);

  const handleSelect = (i) => {
    if (selected === i && selected === questions[currQues].correct_answer) {
      return "select";
    } else if (selected === i && selected !== questions.correct_answer) {
      return "wrong";
    } else if (i === questions[currQues].correct_answer) {
      return "select";
    }
  };

  function handleClick(option) {
    setSelected(option);
    if (option === questions[currQues].correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setError(false);
  }
  const opts = options.map((option) => {
    return (
      <div
        id={option}
        onClick={() => {
          !selected && handleClick(option);
        }}
        className={`options ${selected && handleSelect(option)}`}
      >
        {option}
      </div>
    );
  });

  function handleNext() {
    setSelected("");
    setCurrQues((prev) => prev + 1);
  }
  function handleSubmit() {
    navigate("/Submit");
  }

  return (
    <div className="questionBox">
      <div className="number">{`Question ${currQues + 1}:`}</div>
      <div className="question">
        <div id="question">{questions[currQues].question}</div>
        <div className="option-box">{opts}</div>
      </div>

      {currQues !== questions.length - 1 && (
        <div className="btn" onClick={handleNext}>
          <button>Next Question</button>
        </div>
      )}

      <div className="btn" onClick={handleSubmit}>
        <button>Submit</button>
      </div>
    </div>
  );
}
