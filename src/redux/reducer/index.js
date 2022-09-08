import { combineReducers } from "redux";
import PaletteReducer from "./PaletteReducer";
import RangeReducer from "./RangeReducer";
import ModeReducer from "./ModeReducer";

const rootReducer = combineReducers({
  PaletteReducer,
  RangeReducer,
  ModeReducer,
});

export default rootReducer;
