import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Display } from "./Display";

import { increase } from "./counterSlice";
import { decrease} from "./counterSlice";

function App() {
  // const [count, setCount] = useState(0)

  const disPatch = useDispatch();

  
  const increaseCount = () => {
    disPatch(increase());
  };
  const decreaseCount = () => {
    disPatch(decrease());

  };
  return (
    <>
      <section id="center">
        <Display />
        <button
          type="button"
          className="counter"
          onClick={increaseCount}
        >
          +
        </button>
        <button
          type="button"
          className="counter"
          onClick={decreaseCount}
        >
          -
        </button>
      </section>
    </>
  );
}

export default App;
