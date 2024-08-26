import { useContext, useEffect, useState } from "react";
import DataContext from "../Context/context";
import { Link } from "react-router-dom";
import useAxiosFetch from "../api/api";

function RightSplitQuiz() {
  const {
    selection,
    setQuestionIndex,
    difficulty,
    limit,
    setLimit,
    setDifficulty,
    questionIndex,
    totalQn,
    setCurrentQn,
    setTotalQn,
    category,
    setProgress,
    setRightAns,
    theme,
  } = useContext(DataContext);
  const [currentOpt, setCurrentOpt] = useState([]);
  const [currentAns, setCurrentAns] = useState("");
  const [ansSubmit, setAnswerSubmit] = useState("False");
  const { questions, isLoading } = useAxiosFetch(
    selection,
    difficulty,
    category,
    limit
  );
  const [selected, setSelected] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const optionsIndex = ["A", "B", "C", "D", "F", "G", "H", "I", "J"];
  const [buttonState, setButtonState] = useState("Submit");
  const [questionCount, setQuestionCount] = useState(0);
  const [warning, setWarning] = useState(false);

  function handelAnsSubmit() {
    if (selected === currentAns) {
      setRightAns((prev) => prev + 1);
    }

    setQuestionCount((ques) => ques + 1);
    setQuestionIndex((no) => no + 1);
    const progressCalc = (questionIndex / totalQn) * 100;
    setProgress(progressCalc);
    setButtonState("Submit");
    setAnswerSubmit("False");
    setSelectedId("");
    setSelected("");
  }

  function handelSubmit() {
    if (ansSubmit === "True") {
      handelAnsSubmit();
    } else if (ansSubmit === "False") {
      if (selected === "") {
        setWarning(true);
      } else {
        answerChecker();
        setWarning(false);
      }
    }
  }

  function handelAfterEnd() {
    setButtonState("Submit");
    setQuestionCount(0);
    setQuestionIndex(1);
    setAnswerSubmit("False");
    setSelectedId("");
    setProgress(0);
    setDifficulty("");
    setCurrentQn("");
    setLimit("");
    localStorage.setItem("Selection", "");
    localStorage.setItem("Limit", "");
    localStorage.setItem("Difficulty", "");
    localStorage.setItem("Category", "");
  }

  function handelSelection(val, id) {
    setSelected(val);
    setSelectedId(id);
  }

  function answerChecker() {
    if (questionIndex === totalQn) {
      if (selected === currentAns) {
        setRightAns((prev) => prev + 1);
      }

      setButtonState("See Result");
      setAnswerSubmit("True");
    } else if (selected !== "") {
      setButtonState("Next Question");
      setAnswerSubmit("True");
    }
  }
  useEffect(() => {
    if (selection !== "" && questions.length > 0) {
      const question = questions[questionCount];
      console.log(question);
      const qn = question.question;

      const opt = question.answers;
      let optionsArr = Object.values(opt);
      let filteredOptionsArr = optionsArr.filter((opt) => opt !== null);

      const answers = question.correct_answers;
      let answerKey = Object.keys(answers).find(
        (key) => answers[key] === "true"
      );
      let finalAnswer = opt[answerKey.slice(0, 8)];

      setCurrentQn(qn);
      setCurrentOpt(filteredOptionsArr);
      setCurrentAns(finalAnswer);
      setTotalQn(questions.length);

      const progressCalc = (questionIndex / questions.length) * 100;
      setProgress(progressCalc);
    }
  }, [
    questions,
    questionCount,
    questionIndex,
    selection,
    setCurrentQn,
    setProgress,
    setTotalQn,
  ]);

  return (
    <div className="right-split">
      <p
        style={{ display: isLoading ? "block" : "none" }}
        className={theme === "Light" ? "Loading" : "Loading Loading-dark"}
      >
        Loading....
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        {currentOpt.map((option, index) => {
          let labelStyle = "";
          let divStyle = "";
          let h1Style = "";
          if (ansSubmit === "False" && selectedId === optionsIndex[index]) {
            labelStyle = "label-selected";
            divStyle = "div-selected";
            h1Style = "h1-selected";
          } else if (ansSubmit === "True") {
            if (currentAns === option) {
              labelStyle = "correct-label";
              divStyle = "correct-div";
              h1Style = "correct-h1";
            } else {
              labelStyle = "incorrect-label";
              divStyle = "incorrect-div";
              h1Style = "incorrect-h1";
            }
          }

          return (
            <label
              htmlFor={optionsIndex[index]}
              key={index}
              name="options"
              className={
                theme === "Light"
                  ? `cards cards-quiz ${labelStyle}`
                  : `cards cards-dark cards-quiz ${labelStyle}`
              }
            >
              <div className={`img-wrapper html img-wrapper-quiz ${divStyle}`}>
                <h1
                  className={
                    theme === "Light"
                      ? `options-heading ${h1Style}`
                      : `options-heading options-heading-dark ${h1Style}`
                  }
                >
                  {optionsIndex[index]}
                </h1>
              </div>
              <input
                onChange={(e) => handelSelection(e.target.value, e.target.id)}
                value={option}
                type="radio"
                id={optionsIndex[index]}
                name="options"
                checked={selected === option}
              />
              <p className="question-option">{option}</p>
              {currentAns === option ? (
                <img
                  alt="correct-icon"
                  style={{
                    visibility: ansSubmit === "True" ? "visible" : "hidden",
                  }}
                  src="quiz-app/images/icon-correct.svg"
                />
              ) : (
                <img
                  alt="incorrect-icon"
                  style={{
                    visibility: ansSubmit === "True" ? "visible" : "hidden",
                  }}
                  src="quiz-app/images/icon-incorrect.svg"
                />
              )}
            </label>
          );
        })}
        {buttonState === "See Result" ? (
          <Link to="/result">
            <button onClick={handelAfterEnd} className="submit-btn">
              {buttonState}
            </button>
          </Link>
        ) : (
          <button
            style={{ display: isLoading ? "none" : "block" }}
            onClick={handelSubmit}
            className="submit-btn"
          >
            {buttonState}
          </button>
        )}
      </form>
      <div
        style={{ display: warning ? "flex" : "none" }}
        className="warning-wrapper"
      >
        <img alt="error-icon" src="quiz-app/images/icon-error.svg" />
        <p className="warning">Please Select an Option</p>
      </div>
    </div>
  );
}
export default RightSplitQuiz;
