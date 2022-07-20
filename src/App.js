// import Header from "./components/Header.js";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage.js";
import QuestionPage from "./QuestionPage.js";
import Submit from "./Submit.js";
import "./App.css";

function App() {
  const [userName, setUserName] = React.useState("");
  const [questions, setQuestions] = React.useState();
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`
    )
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  async function fetchApi(formData) {
    await fetch(
      `https://opentdb.com/api.php?amount=${formData.amount}&category=${formData.category}&difficulty=${formData.difficulty}&type=multiple`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length > 0) setQuestions(data.results);
      });

    setUserName(formData.userName);
    setScore(0);
    return true;
  }
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage fetchApi={fetchApi} />}
          ></Route>
          <Route
            exact
            path="/HomePage"
            element={<HomePage fetchApi={fetchApi} />}
          ></Route>
          <Route
            exact
            path="/QuestionPage"
            element={
              <QuestionPage
                // quizData={quizData}
                userName={userName}
                score={score}
                questions={questions}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          ></Route>
          <Route
            exact
            path="/Submit"
            element={<Submit score={score}></Submit>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
