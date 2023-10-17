import "./header.css";
import { IoMdMoon } from "react-icons/io";
import { BsFillSunFill } from "react-icons/bs";

function Header({ dark, darkMode }) {
  const spanClass = dark ? "dark-span" : "light-span";

  return (
    <div className="header">
      <h1 className={dark ? "dark-h1" : ""}>devfinder</h1>
      <button id="todark" onClick={darkMode}>
        {!dark ? (
          <>
            <span className={spanClass}>DARK</span>
            <IoMdMoon id="moon" />
          </>
        ) : (
          <>
            <span className={spanClass}>LIGHT</span>
            <BsFillSunFill id="sun" />
          </>
        )}
      </button>
    </div>
  );
}

export default Header;
