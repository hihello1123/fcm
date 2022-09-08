import { CHANGE_MODE } from "../../action";

const modeInit = {
  mode: "PAINT",
};

function ModeReducer(state = modeInit, action) {
  switch (action.type) {
    case CHANGE_MODE:
      return { mode: action.data };
    default:
      return { ...state };
  }
}

export default ModeReducer;
