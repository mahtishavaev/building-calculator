import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAllData,
  selectSizeX,
  selectSizeY,
  setSizeY,
  setSizeX,
  calculate,
  selectCurrentStepNumber,
} from "../redux/reducer";

export const StepSizes = () => {
  const dispatch = useDispatch();
  const sizeX = useSelector(selectSizeX);
  const sizeY = useSelector(selectSizeY);
  const stepNumber = useSelector(selectCurrentStepNumber);
  return (
    <>
      <div className="step__title">Шаг {stepNumber}</div>
      <div className="step__form">
        <div className="step__name">Длина стен (в метрах)</div>
        <div className="input__wrapper">
          <input
            className="input__text"
            type="text"
            onChange={(e) => dispatch(setSizeX(e.target.value))}
            value={sizeX}
          />
          {" X "}
          <input
            className="input__text"
            type="text"
            onChange={(e) => dispatch(setSizeY(e.target.value))}
            value={sizeY}
          />
        </div>
      </div>
      <div className="buttons__wrapper">
        <button className="button" onClick={() => dispatch(resetAllData())}>
          Отмена
        </button>
        <button className="button" onClick={() => dispatch(calculate())}>
          Рассчитать
        </button>
      </div>
    </>
  );
};
