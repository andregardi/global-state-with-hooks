export const double = (store) => {
  const counter = store.state.counter * 2;
  store.setState({ counter });
};

export const add = (store, amount) => {
  const counter = store.state.counter + amount;
  store.setState({ counter });
  console.log(store);
};

export const counterActions = {
  add4: (store) => {
    const counter = store.state.counter + 4;
    store.setState({ counter });
  },
};
