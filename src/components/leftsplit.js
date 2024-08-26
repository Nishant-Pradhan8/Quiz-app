import { useContext } from "react";
import DataContext from "../Context/context";

function LeftSplit() {
  const { theme } = useContext(DataContext);
  return (
    <div className="left-split">
      <h1 className={theme === "Light" ? "heading1" : "heading1 heading1-dark"}>
        Welcome to the <span className="heading1-span">Technical Quiz!</span>
      </h1>
      <h2 className={theme === "Light" ? "heading2" : "heading2 heading2-dark"}>
        Pick a subject to get started
      </h2>
    </div>
  );
}
export default LeftSplit;
