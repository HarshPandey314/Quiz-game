import Header from "./components/Header.js";
import QuizSettings from "./components/QuizSettings.js";
import QuizImage from "./components/QuizImage.js";
import "./HomePage.css";

export default function HomePage(props) {
  return (
    <div className="homePage">
      <QuizImage />
      <Header />
      <QuizSettings fetchApi={props.fetchApi} />
    </div>
  );
}
