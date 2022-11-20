import { DEC, INC } from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case INC: {
      return {
        ...state,
        counter: state.counter + action.payload
      };
    }

    case DEC: {
      return {
        ...state,
        counter: state.counter - action.payload
      };
    }

    default:
      return state;
  }
};

export { reducer };
