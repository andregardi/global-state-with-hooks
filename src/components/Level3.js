import React from "react";
import { setGlobalState, globalState } from "../App";

const Level3 = props => {
  const { index } = props;

  const add1Global = () => {
    setGlobalState({ counter: globalState.counter + 1 });
  };

  return (
    <div style={{ background: "#eee", border: "1px solid black", textAlign:"center" }}>
      <span>level 3 component N {index}</span>
      <p>counter: {globalState.counter}</p>
      <button onClick={add1Global}>+1 to global</button>
    </div>
  );
};

export default Level3;
