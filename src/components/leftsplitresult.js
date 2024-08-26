import { useContext } from "react";
import DataContext from "../Context/context";

function LeftSplitResult() {
  const { theme } = useContext(DataContext);
  return (
    <div className="left-split">
      <h2 className={theme === "Light" ? "heading1" : "heading1 heading1-dark"}>
        Quiz completed <span className="heading1-span">Frontend Quiz!</span>
      </h2>
    </div>
  );
}
export default LeftSplitResult;
