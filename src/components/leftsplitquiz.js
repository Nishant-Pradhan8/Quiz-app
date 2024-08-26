import { useContext } from "react";
import DataContext from "../Context/context";

function LeftSplitQuiz() {
  const { questionIndex, theme, currentQn, progress, totalQn } = useContext(DataContext);

  return (
    <div className="left-split">
      <h2
        className={theme === "Light" ? "heading2" : "heading2 heading2-dark"}
      >{`Question ${questionIndex} of ${totalQn}`}</h2>
      <h1
        className={
          theme === "Light" ? "heading1-quiz" : "heading1-quiz heading1-dark"
        }
      >
        {currentQn}
      </h1>
      <div className="progress-div">
        <div style={{ width: `${progress}%` }} className="progress"></div>
      </div>
    </div>
  );
}
export default LeftSplitQuiz;
