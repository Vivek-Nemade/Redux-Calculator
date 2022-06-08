import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Inc,
  Dec,
  setinput,
  add,
  subtract,
  multiply,
  divide,
  reset,
} from "./Store/action";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const input_value = useSelector((state) => state.input);

  return (
    <div className="App">
      <h1>APP</h1>
      <h2>Counter :{count}</h2>
      <div>
        <button onClick={() => dispatch(Dec())}>-</button>
        <button onClick={() => dispatch(Inc())}>+</button>
      </div>
      <div>
        <input
          style={{ width: "50px", fontSize: "20px", textAlign: "center" }}
          type="number"
          onChange={(e) => {
            dispatch(setinput(e.target.value));
          }}
        />
      </div>

      <div>
        <button onClick={() => dispatch(add(input_value))}>add</button>
        <button onClick={() => dispatch(subtract(input_value))}>
          Subtract
        </button>
        <button onClick={() => dispatch(multiply(input_value))}>
          Multiply
        </button>
        <button onClick={() => dispatch(divide(input_value))}>Divide</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

export default App;
