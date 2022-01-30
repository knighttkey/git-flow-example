import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import "./App.scss";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
