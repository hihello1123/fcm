import { CHANGE_RANGE } from "../../action";

const rangeInit = {
  range: "3.5",
};

function RangeReducer(state = rangeInit, action) {
  switch (action.type) {
    case CHANGE_RANGE:
      return { range: action.data };
    default:
      return { ...state };
  }
}

export default RangeReducer;
