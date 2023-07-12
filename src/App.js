import "./App.css";
import About from "./components/About";
import AlertMsg from "./components/AlertMsg";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const [theme, setTheme] = useState("light");
  // whether dark theme is enabled or not

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "#30353b";
      document.body.style.color = "#fff";
      showAlert("dark mode has been enabled", "success");
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "black";
      showAlert("light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          heading="Home"
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <div className="container">
          <AlertMsg alert={alert} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm heading="Text Converter and Counter" theme={theme} showAlert={showAlert} />
              }
            />

            {/* <TextForm heading="Text Converter and Counter" theme={theme} /> */}

            <Route 
              exact path="/About" 
              element={
              <About theme={theme} />
              } 
            />

            {/* <About theme={theme} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
