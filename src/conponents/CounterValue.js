import { useState } from "react";
import { store } from "../redux/store";
const Countervalue = () => {
  const value = store.getState();
  const [state, setState] = useState(0);
  const count = value.counter;
  const { subscribe } = store;

  subscribe(() => {
    setState(state + 1);
  });

  subscribe(() => {
    setState(state - 1);
  });

  return (
    <>
      <h1> Count : {count} </h1>
    </>
  );
};

export default Countervalue;
