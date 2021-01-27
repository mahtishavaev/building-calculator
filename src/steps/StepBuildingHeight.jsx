import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, resetAllData, selectBuildingHeight, setBuildingHeight } from "../redux/reducer";

export const StepBuildingHeight = () => {
  const dispatch = useDispatch();
  const buildingHeight = useSelector(selectBuildingHeight);
  return (
    <>
      <div className="step__title">Шаг 2</div>
      <div className="step__form">
        <div className="step__name">Количество этажей (число)</div>
        <div className="input__wrapper">
          <input
            className="input__text"
            type="text"
            onChange={(e) => dispatch(setBuildingHeight(e.target.value))}
            value={buildingHeight}
          />
        </div>
      </div>
      <div className="buttons__wrapper">
        <button className="button" onClick={() => dispatch(resetAllData())}>
          Отмена
        </button>
        <button className="button" onClick={() => dispatch(nextStep())}>
          Далее
        </button>
      </div>
    </>
  );
};
