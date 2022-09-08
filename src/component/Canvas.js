import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Preview from "./CanvasComponent/Preview";

function Canvas() {
  let selectedColor = useSelector((state) => state.PaletteReducer.color);
  let selectedRange = useSelector((state) => state.RangeReducer.range);
  let selectedMode = useSelector((state) => state.ModeReducer.mode);

  let [clicked, setClicked] = useState(false);
  let [lineXY, setline] = useState([]);

  useEffect(() => {
    let canvas = document.getElementById("jsCanvas");
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

    eraseCanvas();
  }, []);

  useEffect(() => {
    let canvas = document.getElementById("jsCanvas");
    if (selectedMode === "PAINT") {
      canvas.addEventListener("mousedown", () => {
        setClicked(true);
        setline([]);
      });

      canvas.addEventListener("mouseup", () => {
        setClicked(false);
      });

      function draw() {
        let ctx = canvas.getContext("2d");

        ctx.beginPath();

        for (let n = 0; n < lineXY.length; n++) {
          if (n === 0) {
            ctx.moveTo(lineXY[n][0], lineXY[n][1]);
          } else {
            ctx.lineTo(lineXY[n][0], lineXY[n][1]);
          }
        }

        ctx.strokeStyle = selectedColor;
        ctx.lineWidth = selectedRange;
        ctx.lineCap = "round";

        ctx.stroke();
      }

      draw();

      return () => {
        canvas.removeEventListener("mousedown", () => {
          setClicked(true);
        });

        canvas.removeEventListener("mouseup", () => {
          setClicked(false);
        });
      };
    } else {
      function pour() {
        let ctx = canvas.getContext("2d");
        let path = new Path2D();
        path.moveTo(0, 0);
        path.lineTo(700, 0);
        path.lineTo(700, 700);
        path.lineTo(0, 700);
        path.closePath();

        ctx.fillStyle = selectedColor;
        ctx.fill(path, "evenodd");
      }

      pour();
    }
  }, [clicked]);

  useEffect(() => {
    let canvas = document.getElementById("jsCanvas");
    if (selectedMode === "PAINT") {
      if (clicked) {
        canvas.addEventListener("mousemove", (e) => {
          setline([...lineXY, [e.offsetX, e.offsetY]]);
        });
      }

      return () => {
        canvas.removeEventListener("mousemove", (e) => {
          setline([...clicked, [e.offsetX, e.offsetY]]);
        });
      };
    } else {
    }
  }, [clicked, lineXY]);

  return (
    <div className="canvas-wrap">
      <canvas
        id="jsCanvas"
        className="canvas"
        width={"700px"}
        height={"700px"}
      ></canvas>
      <Preview />
    </div>
  );
}

export default Canvas;
