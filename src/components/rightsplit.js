import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../Context/context";

function RightSplit() {
  const { theme } = useContext(DataContext);
  return (
    <div className="right-split">
      <Link
        state={{ selected: "HTML", category: "Code" }}
        className={theme === "Light" ? "link cards" : "link cards cards-dark"}
        to="/preference"
      >
        <div className="img-wrapper html">
          <img
            className="png-icon"
            src="./images/icon-html.svg"
            alt="HTML icon"
          />
        </div>
        <h3 className="card-heading">HTML</h3>
      </Link>

      <Link
        state={{ selected: "JavaScript", category: "Code" }}
        className={theme === "Light" ? "link cards" : "link cards cards-dark"}
        to="/preference"
      >
        <div className="img-wrapper icon-background">
          <img
            className="png-icon"
            src="./images/icon-js.svg"
            alt="JavaScrip icon"
          />
        </div>
        <h3 className="card-heading">JavaScript</h3>
      </Link>

      <Link
        state={{ selected: "PHP", category: "Code" }}
        className={theme === "Light" ? "link cards" : "link cards cards-dark"}
        to="/preference"
      >
        <div className="img-wrapper icon-background">
          <img className="png-icon" src="./images/web.png" alt="Php icon" />
        </div>
        <h3 className="card-heading">PHP</h3>
      </Link>

      <Link
        state={{ selected: "MySQL", category: "SQL" }}
        className={theme === "Light" ? "link cards" : "link cards cards-dark"}
        to="/preference"
      >
        <div className="img-wrapper icon-background">
          <img className="png-icon" src="./images/mysql.png" alt="sql icon" />
        </div>
        <h3 className="card-heading">MySQL</h3>
      </Link>
    </div>
  );
}
export default RightSplit;
