import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Switch,
} from "react-router-dom";
import Home from "./pages/Home.js";
import Knowledges from "./pages/Knowledges.js";
import Contacts from "./pages/Contacts.js";
import NotFound from "./pages/NotFound.js";
import Portfolio from "./pages/Portfolio.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knowledges" element={<Knowledges />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
