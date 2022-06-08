import {
  Addition,
  Decrement,
  Divide,
  Increment,
  Multiply,
  Reset,
  Setinput,
  Subtract,
} from "./action.types";

export const Inc = (val) => ({ type: Increment });
export const Dec = (val) => ({ type: Decrement });
export const setinput = (val) => ({ type: Setinput, payload: Number(val) });
export const add = (val) => ({ type: Addition, payload: val });
export const subtract = (val) => ({ type: Subtract, payload: val });
export const multiply = (val) => ({ type: Multiply, payload: val });
export const divide = (val) => ({ type: Divide, payload: val });
export const reset = (val) => ({ type: Reset });
