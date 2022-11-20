import { DEC, INC } from "./actionTypes";

const handleAddObjAction = (payload) => {
  return {
    type: INC,
    payload
  };
};

const handleDecObjAction = (payload) => {
  return {
    type: DEC,
    payload
  };
};

export { handleAddObjAction, handleDecObjAction };
