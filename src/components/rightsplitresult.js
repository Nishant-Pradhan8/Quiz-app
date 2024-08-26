import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../Context/context";

function RightSplitResult() {
  const { selection, rightAns, iconImgSrc, totalQn, setRightAns, theme } =
    useContext(DataContext);
  let imgSrc = iconImgSrc(selection);
  return (
    <div className="result-wrapper">
      <div
        className={
          theme === "Light" ? "result-card" : "result-card result-card-dark"
        }
      >
        <div className="result-card-head">
          <div className="img-wrapper html">
            <img className="quiz-logo" src={imgSrc} alt={`${selection} icon`} />
          </div>
          <h3
            className={
              theme === "Light"
                ? "card-heading result-card-heading"
                : "card-heading result-card-heading result-card-heading-dark"
            }
          >
            {selection}
          </h3>
        </div>
        <h1
          className={
            theme === "Light"
              ? "result-card-heading2"
              : "result-card-heading2 result-card-heading2-dark"
          }
        >
          {rightAns}
        </h1>
        <h2
          className={theme === "Light" ? "heading2" : "heading2 heading2-dark"}
        >
          out of {totalQn}
        </h2>
      </div>
      <div className="result-button-wrapper">
        <Link className="result-link" to="/preference">
          <button
            className="submit-btn play-again"
            onClick={() => setRightAns(0)}
          >
            Play Again
          </button>
        </Link>
        <Link className="result-link back-to-home" to="/">
          <button
            onClick={() => setRightAns(0)}
            className="submit-btn play-again"
          >
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
export default RightSplitResult;
