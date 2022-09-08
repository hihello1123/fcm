import { useDispatch } from "react-redux";
import { changeColor } from "../../action";

function Palette() {
  let dispatch = useDispatch();
  let colorArr = [
    "#2c2c2c",
    "white",
    "#ff3b00",
    "#ff9500",
    "#ffcc00",
    "#4cd963",
    "#5ac8fa",
    "#0579ff",
    "#5856d6",
  ];

  function clickColor(color) {
    dispatch(changeColor(color));
  }

  function CreateButton() {
    return colorArr.map((item, index) => {
      return (
        <div
          key={index}
          className="controls__color jsColor"
          style={{ backgroundColor: item }}
          onClick={() => {
            clickColor(item);
          }}
        />
      );
    });
  }

  return (
    <div className="controls__colors" id="jsColors">
      <CreateButton />
      {/* <div
        className="controls__color jsColor"
        style={{ backgroundColor: "#2c2c2c" }}
      ></div>
      <div
        className="controls__color jsColor"
        style={{ backgroundColor: "white" }}
      ></div>
      <div
        className="controls__color jsColor"
        style={{ backgroundColor: "#ff3b00" }}
      ></div>
      <div
        className="controls__color jsColor"
        style={{ backgroundColor: "#ff9500" }}
      ></div>
      <div
        className="controls__color jsColor"
        style={{ backgroundColor: "#ffcc00" }}
      ></div>
      <div
        className="controls__color jsColor"
        style={{ backgroundColor: "#4cd963" }}
      ></div>
      <div
        className="controls__color jsColor"
        style={{ backgroundColor: "#5ac8fa" }}
      ></div>
      <div
        className="controls__color jsColor"
        style={{ backgroundColor: "#0579ff" }}
      ></div>
      <div
        className="controls__color jsColor"
        style={{ backgroundColor: "#5856d6" }}
      ></div> */}
    </div>
  );
}

export default Palette;
