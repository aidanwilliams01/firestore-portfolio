import React from "react";
import Header from "./Header";
import SurveyControl from "./PortfolioControl";
import SignIn from "./Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<SurveyControl />} />
      </Routes>
    </Router>
  );
}

export default App;