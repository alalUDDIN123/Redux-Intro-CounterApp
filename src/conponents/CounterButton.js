import { handleAddObjAction, handleDecObjAction } from "../redux/action";
import { store } from "../redux/store";

const CounterButton = () => {
  const { dispatch } = store;
  const handleAdd = () => {
    dispatch(handleAddObjAction(1));
  };

  const handleDec = () => {
    dispatch(handleDecObjAction(1));
  };

  return (
    <>
      <button onClick={handleAdd}> Add </button>
      <button onClick={handleDec}> Dec </button>
    </>
  );
};

export default CounterButton;
