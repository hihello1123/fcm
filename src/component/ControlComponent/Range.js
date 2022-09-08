import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeRange } from "../../action";

function Range() {
  let dispatch = useDispatch();

  useEffect(() => {
    function dragRange(e) {
      dispatch(changeRange(e.target.value));
    }

    document.getElementById("jsRange").addEventListener("mouseup", (e) => {
      dragRange(e);
    });

    return () => {
      document.getElementById("jsRange").removeEventListener("mouseup", (e) => {
        dragRange(e);
      });
    };
  }, []);

  return (
    <div className="controls__range">
      <input
        type="range"
        id="jsRange"
        min="0.5"
        max="6.5"
        defaultValue="3.5"
        step="0.1"
      />
    </div>
  );
}

export default Range;
