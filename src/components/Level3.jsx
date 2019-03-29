import React from "react";
import { hookx } from "../hooks/globalState";

const useGlobal = hookx({ counter: 1 });

const Level3 = props => {
  const { index } = props;

  const [state, setState] = useGlobal();

  const add1Global = () => {
    const counter = state.counter + 1;
    setState({ counter });
  };

  return (
    <div
      style={{
        display: "inline-block",
        height: "100px",
        width: "200px",
        margin: "20px",
        background: "#eee",
        border: "1px solid black",
        textAlign: "center"
      }}
    >
      <span>level 3 component N{index}</span>
      <p>
        counter:
        {state.counter}
      </p>
      <button onClick={add1Global}>+1 to global</button>
    </div>
  );
};

export default Level3;
