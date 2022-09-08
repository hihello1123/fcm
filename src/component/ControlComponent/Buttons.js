import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../../action";

function Utility() {
  let dispatch = useDispatch();
  let selectedMode = useSelector((state) => state.ModeReducer.mode);
  let canvas = document.getElementById("jsCanvas");

  function clickMode() {
    if (selectedMode === "PAINT") {
      dispatch(changeMode("FILL"));
    } else {
      dispatch(changeMode("PAINT"));
    }
  }

  function eraseCanvas() {
    let ctx = canvas.getContext("2d");
    let path = new Path2D();
    path.moveTo(0, 0);
    path.lineTo(700, 0);
    path.lineTo(700, 700);
    path.lineTo(0, 700);
    path.closePath();

    ctx.fillStyle = "white";
    ctx.fill(path, "evenodd");
  }

  function downloadFile() {
    let download = document.getElementById("download");
    let image = document
      .getElementById("jsCanvas")
      .toDataURL("imge/png")
      .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
    download.setAttribute(
      "download",
      "myDraw-" + new Date().toISOString() + ".png"
    );
  }

  return (
    <div className="controls__btns">
      <button
        id="jsMode"
        onClick={() => {
          clickMode();
        }}
      >
        {selectedMode}
      </button>
      <a id="download">
        <button id="jsSave" onClick={() => downloadFile()}>
          Save
        </button>
      </a>
      <button id="jsReset" onClick={() => eraseCanvas()}>
        Reset
      </button>
    </div>
  );
}

export default Utility;
