import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../../action";

function Preview() {
  let dispatch = useDispatch();
  let selectedColor = useSelector((state) => state.PaletteReducer.color);
  let selectedRange = useSelector((state) => state.RangeReducer.range);
  let selectedMode = useSelector((state) => state.ModeReducer.mode);

  useEffect(() => {
    if (selectedColor === "white") {
      document.getElementById("color__status").style.color = "black";
    } else {
      document.getElementById("color__status").style.color = "white";
    }
  }, [selectedColor]);

  useEffect(() => {
    function range() {
      let canvas = document.getElementById("line__canvas");

      if (canvas.getContext) {
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, 300, 300);

        ctx.fillStyle = selectedColor;
        ctx.fillRect(25, 75 - selectedRange, 250, selectedRange);
      }
    }

    range();

    if (selectedColor === "white") {
      document.getElementById("line__canvas").style.backgroundColor = "#2c2c2c";
    } else {
      document.getElementById("line__canvas").style.backgroundColor = "white";
    }
  }, [selectedRange, selectedColor]);

  function clickMode() {
    if (selectedMode === "PAINT") {
      dispatch(changeMode("FILL"));
    } else {
      dispatch(changeMode("PAINT"));
    }
  }

  return (
    <div className="status__box">
      <div
        id="color__status"
        className="color__preview"
        style={{ backgroundColor: selectedColor }}
        onClick={() => clickMode()}
      >
        {selectedMode}
      </div>
      <canvas id="line__canvas" className="line__status"></canvas>
    </div>
  );
}

export default Preview;
