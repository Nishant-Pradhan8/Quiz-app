import { useContext } from "react";
import DataContext from "../Context/context";
import { useLocation } from "react-router-dom";

function ThemeSwitch() {
  const { selection, iconImgSrc, theme, setTheme } = useContext(DataContext);
  const location = useLocation();
  const imgSrc = iconImgSrc(selection);

  return (
    <header className="header">
      <div
        style={{
          visibility:
            location.pathname === "/" || location.pathname === "/preference"
              ? "hidden"
              : "visible",
        }}
        className="img-wrapper html"
      >
        <img src={imgSrc} className="quiz-logo" alt={`${selection} icon`} />
      </div>
      <div className="toggle-btn">
        {theme === "Light" ? (
          <img className="theme-icon" alt="dark mode sun" src="/images/icon-sun-dark.svg" />
        ) : (
          <img className="theme-icon"  alt="light mode sun" src="/images/icon-sun-light.svg" />
        )}
        <input
          onClick={() =>
            theme === "Light" ? setTheme("Dark") : setTheme("Light")
          }
          type="checkbox"
          id="theme"
        />
        <label htmlFor="theme" className="toggle-label">
          <span className="toggle-ball"></span>
        </label>
        {theme === "Light" ? (
          <img className="theme-icon" alt="dark mode moon" src="/images/icon-moon-dark.svg" />
        ) : (
          <img className="theme-icon"  alt="light mode moon" src="/images/icon-moon-light.svg" />
        )}
      </div>
    </header>
  );
}
export default ThemeSwitch;
