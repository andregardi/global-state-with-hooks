import { globalState, setGlobalState } from "../hooks/globalState";

const add = (amount) => {
  const counter = globalState.counter + amount;
  setGlobalState({ counter });
};

export default add;
