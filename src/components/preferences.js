import { useContext, useState } from "react";
import DataContext from "../Context/context";
import { useNavigate, useLocation } from "react-router-dom";

function Preferences() {
  const {
    category,
    limit,
    selection,
    setSelection,
    difficulty,
    setDifficulty,
    setCategory,
    setLimit,
    theme,
  } = useContext(DataContext);

  const [preferenceWarn, setPreferenceWarn] = useState(false);

  const location = useLocation();
  const questionCount = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const questionCountPhp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const difficultyOptions = ["Easy", "Medium", "Hard"];
  const data = location.state;
  const selected = data?.selected || selection;
  const categ = data?.category || category;
  const navigate = useNavigate();

  function handelOptionSelection(selected, category) {
    if (limit === "" || difficulty === "") {
      setPreferenceWarn(true);
    } else {
      setSelection(selected);
      setCategory(category);
      setPreferenceWarn(false);
      localStorage.setItem("Selection", selected);
      localStorage.setItem("Category", category);
      localStorage.setItem("Limit", limit);
      localStorage.setItem("Difficulty", difficulty);
      navigate("/quiz");
    }
  }

  return (
    <div className="preference-wrapper">
      <div className="preference-main-div">
        <h1
          className={
            theme === "Light"
              ? "heading1 preference-h1"
              : "heading1 preference-h1 preference-h1-dark "
          }
        >
          Select your preferences
        </h1>
        <div className="select-wrapper-main">
          <div className="select-wrapper">
            <select
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              className="dropdown"
              id="questionCount"
              name="questionCount"
            >
              <option value="">Select number of question</option>
              {selected === "PHP"
                ? questionCountPhp.map((count, index) => {
                    return (
                      <option key={index} value={count}>
                        {count} questions
                      </option>
                    );
                  })
                : questionCount.map((count, index) => {
                    return (
                      <option key={index} value={count}>
                        {count} questions
                      </option>
                    );
                  })}
            </select>
          </div>
          <div className="select-wrapper">
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="dropdown"
              id="difficulty"
            >
              <option className="option" value="">
                Choose Difficulty Level
              </option>
              {selected === "JavaScript" ? (
                <option key="3" value="Easy">
                  Easy
                </option>
              ) : (
                difficultyOptions.map((diff, index) => {
                  return (
                    <option className="option" key={index} value={diff}>
                      {diff}
                    </option>
                  );
                })
              )}
            </select>
          </div>
          <p
            style={{
              color: "#f15656",
              display: preferenceWarn ? "block" : "none",
            }}
          >
            Please Select all the Preferences
          </p>
          <div className="button-wrapper">
            <button style={{cursor:'pointer'}} onClick={() => navigate("/")} className="preference-btn">
              Back
            </button>

            <button style={{cursor:'pointer'}} 
              onClick={() => handelOptionSelection(selected, categ)}
              className="preference-btn"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Preferences;
