import React, { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [enablemode, setMode] = useState("dark");
  const [btnText, setBtnText] = useState("Enble Dark Mode");
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

  const toggleMode = () => {
    if (enablemode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "black";
      setBtnText("Enable Light Mode");
      showAlert("Dark Mode is Enable", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "Numan star";
      // }, 1000);
      // setInterval(() => {
      //   document.title = "TextUtils - Home"
      // }, 1500);
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "white";
      setBtnText("Enable Dark Mode");
      showAlert("Light Mode is Enable", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        enablemode={enablemode}
        toggleMode={toggleMode}
        btntext={btnText}
      />
      <Alert alert={alert} />

      <div className="container mt-3">
        {/* <Switch> */}
        {/* <Route path="/about">
              <About enablemode={enablemode} />
            </Route> */}
        {/* <Route path="/"> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter your text below"
          enablemode={enablemode}
        />
        {/* </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
