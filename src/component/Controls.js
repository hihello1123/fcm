import Palette from "./ControlComponent/Palette";
import Buttons from "./ControlComponent/Buttons";
import Range from "./ControlComponent/Range";

function Controls() {
  return (
    <div className="controls">
      <Range />
      <Buttons />
      <Palette />
    </div>
  );
}

export default Controls;
