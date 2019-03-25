import React, { useState } from "react";
import Level2 from "./components/Level2";

export let setGlobalState = () => {};
export let globalState = {};

const initalState = { counter: 0 };

const App = () => {
  [globalState, setGlobalState] = useState(initalState);
  return (
    <>
      <Level2 />
    </>
  );
};

export default App;
