import { useNavigate } from "react-router-dom";
import QuizImage from "./components/QuizImage.js";
import "./Submit.css";

export default function Submit(props) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  return (
    <div className="submit">
      <div className="image">
        <QuizImage />
      </div>
      <div className="con">Congratulations!</div>
      <div className="score">{`Your Score is ${props.score}`}</div>
      <div className="new">
        <a onClick={handleClick}>Start a new Quiz</a>
      </div>
    </div>
  );
}
