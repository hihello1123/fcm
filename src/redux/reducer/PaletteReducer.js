import { CHANGE_COLOR } from "../../action";

const colorInit = {
  color: "#2c2c2c",
};

function PaletteReducer(state = colorInit, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return { color: action.data };
    default: {
      return { ...state };
    }
  }
}

export default PaletteReducer;
