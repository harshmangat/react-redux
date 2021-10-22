import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import {
  INCREMENT,
  DECREMENT,
  RESET,
  ADD_COUNT,
} from "./redux/actions/counterActions";

const App = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="px-5 m-auto bg-green-100 border rounded-lg mt-44 w-max">
      <p className="mt-1 text-2xl font-bold text-center text-green-600">Counter App</p>
      <p className="mt-20 text-2xl font-bold text-center">{count}</p>

      <div className="flex items-center justify-center gap-10 h-36">
        <button
          className=" btn btn-primary"
          onClick={() => dispatch(INCREMENT())}
        >
          Increment
        </button>

        <button
          className="rounded-full btn btn-secondary"
          onClick={() => dispatch(DECREMENT())}
        >
          Decrement
        </button>

        <button
          className=" btn btn-circle btn-lg"
          onClick={() => dispatch(RESET())}
        >
          Reset
        </button>
        
        <button
          className="btn btn-outline btn-accent"
          onClick={() => dispatch(ADD_COUNT(10))}
        >
          Add on
        </button>
      </div>
    </div>
  );
};

export default App;
