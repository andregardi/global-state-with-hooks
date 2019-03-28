import { useState, useEffect } from 'react';
import * as counter from '../actions/counter';

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

export const a = 0;

const runLlisteners = (store) => {
  store.listeners.forEach((listener) => {
    listener(store.state);
  });
};

const setState = (newState) => {
  this.state = { ...this.state, ...newState };
  runLlisteners(this.state);
};

export const newStore = (initialState, mutations, actions) => {
  const store = { state: initialState, listeners: [] };
  // store.runLlisteners = runLlisteners;
  store.setState = setState.bind(store);

  store.useCustom = () => {
    const listener = useState()[1];
    const { listeners } = store;
    if (!listeners.includes(listener)) {
      listeners.push(listener);
    }
  };

  return store;
};
