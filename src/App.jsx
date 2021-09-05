import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About/About";
import ContactForm from "./Components/Contact/ContactForm";
import Navbar from "./Components/Navbar/Navbar";
import Text from "./Components/Text/Text";

const App = () => {
  const [mode, setMode] = useState("light");
  const toggleHandler = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>
      <Navbar toggleMode={toggleHandler} changeColor={mode} />
      <div className="container-fluid main__container mt-3">
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <Text changeColor={mode} />
            </Route>

            <Route path="/about" exact>
              <About changeColor={mode} />
            </Route>

            <Route path="/contact-us" exact>
              <ContactForm changeColor={mode} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
