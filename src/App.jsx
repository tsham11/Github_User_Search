import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

function App() {
  const [dark, setDark] = useState(false);

  function darkMode() {
    setDark(!dark);
    console.log(dark);
  }

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);

  return (
    <>
      <Header dark={dark} darkMode={darkMode} />
      <Search dark={dark} />
    </>
  );
}

export default App;
