import "./QuizSettings.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function QuizSettings(props) {
  const navigate = useNavigate();
  const [error, setError] = React.useState(false);
  const [formData, setFormData] = React.useState({
    userName: "",
    difficulty: "",
    category: 0,
    amount: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  //   console.log(formData);
  async function handleClick() {
    const { userName, difficulty, category, amount } = formData;
    if (!(userName && difficulty && category && amount)) {
      {
        setError(true);
      }
      return;
    }

    const a = await props.fetchApi(formData);
    if (a) navigate("/QuestionPage");
  }

  return (
    <div className="quizSettings">
      {error && <div className="error">Please Fill all the fields</div>}
      <div>
        <div className="heading">Quiz Settings</div>
        <div className="box1">
          <form action="">
            <input
              type="text"
              placeholder="Enter Your Name"
              name="userName"
              onChange={handleChange}
              required
            />
            <select
              name="difficulty"
              id="difficulty"
              onChange={handleChange}
              required
            >
              <option value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            <select
              name="category"
              id="category"
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              {/* <option value="any">Any Category</option> */}
              <option value="9">General Knowledge</option>
              <option value="10">Entertainment: Books</option>
              <option value="11">Entertainment: Film</option>
              <option value="12">Entertainment: Music</option>
              <option value="13">Entertainment: Musicals &amp; Theatres</option>
              <option value="14">Entertainment: Television</option>
              <option value="15">Entertainment: Video Games</option>
              <option value="16">Entertainment: Board Games</option>
              <option value="17">Science &amp; Nature</option>
              <option value="18">Science: Computers</option>
              <option value="19">Science: Mathematics</option>
              <option value="20">Mythology</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="23">History</option>
              <option value="24">Politics</option>
              <option value="25">Art</option>
              <option value="26">Celebrities</option>
              <option value="27">Animals</option>
              <option value="28">Vehicles</option>
              <option value="29">Entertainment: Comics</option>
              <option value="30">Science: Gadgets</option>
              <option value="31">
                Entertainment: Japanese Anime &amp; Manga
              </option>
              <option value="32">
                Entertainment: Cartoon &amp; Animations
              </option>
            </select>

            <input
              type="number"
              placeholder="Enter the amount of Questions"
              name="amount"
              onChange={handleChange}
              required
            />
          </form>
        </div>

        <div className="btn" onClick={handleClick}>
          <button>Start Quiz</button>
        </div>
      </div>
    </div>
  );
}
