import {
  Decrement,
  Increment,
  Addition,
  Setinput,
  Subtract,
  Multiply,
  Divide,
  Reset,
} from "./action.types";

let initialeState = {
  count: 0,
  input: 1,
};

export const reducer = (state = initialeState, action) => {
  switch (action.type) {
    case Increment: {
      state.count++;
      return {
        ...state,
      };
    }
    case Decrement: {
      state.count--;
      return {
        ...state,
      };
    }
    case Setinput: {
      state.input = action.payload;
      return {
        ...state,
      };
    }
    case Addition: {
      state.count += action.payload;
      return {
        ...state,
      };
    }
    case Subtract: {
      state.count -= action.payload;
      return {
        ...state,
      };
    }
    case Multiply: {
      state.count *= action.payload;
      return {
        ...state,
      };
    }
    case Divide: {
      state.count /= action.payload;
      return {
        ...state,
      };
    }
    case Reset: {
      state.count = 0;
      state.input = 0;
      return {
        ...state,
      };
    }
    default:
      return { ...state };
  }
};
