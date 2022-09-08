//===== 색 변경
export const CHANGE_COLOR = "CHANGE_COLOR";

export const changeColor = (data) => (dispatch) => {
  dispatch({ type: CHANGE_COLOR, data: data });
};

//===== 굵기 변경
export const CHANGE_RANGE = "CHANGE_RANGE";

export const changeRange = (data) => (dispatch) => {
  dispatch({ type: CHANGE_RANGE, data: data });
};

//===== 모드 변경
export const CHANGE_MODE = "CHANGE_MODE";

export const changeMode = (data) => (dispatch) => {
  dispatch({ type: CHANGE_MODE, data: data });
};
