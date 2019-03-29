import { useState, useEffect } from "react";
// import * as counter from "../actions/counter";

// export const store = { state: {}, mutations: {}, actions: {} };
// let listeners = [];
// const runLlisteners = () => {
//   listeners.forEach((listener) => {
//     listener(store.state);
//   });
// };

// export const setGlobalState = (newState) => {
//   store.state = { ...store.state, ...newState };
//   runLlisteners();
// };

// export const useGlobal = () => {
//   const listener = useState()[1];
//   useEffect(
//     () => () => {
//       listeners = listener.filter(l => l !== listener);
//     },
//     [],
//   );
//   if (!listeners.includes(listener)) {
//     listeners.push(listener);
//   }
//   return [store.state, actions];
// };

// const actions = {
//   counter: { ...counter },
// };

const removeListenerOnUmount = (listeners, listener) => {
  useEffect(
    () => () => {
      listeners = listener.filter(l => l !== listener);
    },
    []
  );
};

function setState(newState) {
  this.state = { ...this.state, ...newState };
  this.listeners.forEach(listener => {
    listener(this.state);
  });
}

function useCustom() {
  console.log(listeners);
  const { state, listeners, setState } = this;
  const listener = useState()[1];
  useEffect(
    () => () => {
      console.log(listeners);
      this.listeners = this.listener.filter(l => l !== listener);
      console.log(listeners);
    },
    []
  );
  // removeListenerOnUmount(listeners, listener);
  if (!listeners.includes(listener)) {
    listeners.push(listener);
  }
  return [state, setState];
}

export const hookx = (initialState, mutations, actions) => {
  const store = { state: initialState, listeners: [] };
  store.setState = setState.bind(store);
  return useCustom.bind(store);
};
