import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, resetAllData, selectMaterial, selectCurrentStepNumber, selectBuildingType } from "../redux/reducer";
import { GarageMaterial } from "./GarageMaterial";
import { HouseMaterial } from "./HouseMaterial";

export const StepMaterial = () => {
  const dispatch = useDispatch();
  const buildingType = useSelector(selectBuildingType);
  const stepNumber = useSelector(selectCurrentStepNumber);
  return (
    <>
      <div className="step__title">Шаг {stepNumber}</div>
      <div className="step__form">
        <div className="step__name">Материал стен:</div>
        {buildingType === 1 ? <HouseMaterial /> : <GarageMaterial />}
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
