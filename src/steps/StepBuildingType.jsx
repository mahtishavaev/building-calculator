import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, resetAllData, selectBuildingType, setBuildingType } from "../redux/reducer";

export const StepBuildingType = () => {
  const dispatch = useDispatch();
  const buildingType = useSelector(selectBuildingType);
  return (
    <>
      <div className="step__title">Шаг 1</div>
      <div className="step__form">
        <div className="step__name">Что будем строить?</div>
        <div className="inputs__wrapper">
          <div className="radio">
            <label>
              <input
                type="radio"
                name="building"
                onChange={() => dispatch(setBuildingType(1))}
                checked={buildingType === 1}
              />
              Жилой дом
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="building"
                onChange={() => dispatch(setBuildingType(2))}
                checked={buildingType === 2}
              />
              Гараж
            </label>
          </div>
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
