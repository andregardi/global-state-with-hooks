export const double = (hookx) => {
  const counter = hookx.state.counter * 2;
  hookx.setState({ counter });
};

export const add = (hookx, amount) => {
  const counter = hookx.state.counter + amount;
  hookx.setState({ counter });
};

export const counterActions = {
  add4: (hookx) => {
    const counter = hookx.state.counter + 4;
    hookx.setState({ counter });
  },
};
