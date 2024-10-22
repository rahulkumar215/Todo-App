import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./componenets/header/Header";
import useLocalStorage from "use-local-storage";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage("isDark", false);

  function handleTheme() {
    // data-theme={isDarkTheme ? "dark" : "light"}
    setIsDarkTheme((prev) => {
      document.body.setAttribute("data-theme", !prev ? "dark" : "light");
      return !prev;
    });
  }

  useEffect(function () {
    handleTheme();
  }, []);

  return (
    <div>
      <div className="background__image">&nbsp;</div>
      <div className="container">
        <Header theme={isDarkTheme} onClick={handleTheme} />
      </div>
    </div>
  );
}

export default App;
