const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      const { amount } = action;
      const counter = state.counter + amount;
      return { ...state, counter };
    }
    default:
      return state;
  }
};

export default reducer;
