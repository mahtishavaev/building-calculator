import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetAllData, selectResponseMessage } from "../redux/reducer";

export const StepError = () => {
  const dispatch = useDispatch();
  const responseMessage = useSelector(selectResponseMessage);
  return (
    <>
      <div className="step__title">Результат рассчета</div>
      <div className="step__form">
        <div className="step__name">Ошибка</div>
        <div className="error-message">{responseMessage}</div>
      </div>
      <div className="buttons__wrapper">
        <button className="button" onClick={() => dispatch(resetAllData())}>
          Новый рассчет
        </button>
      </div>
    </>
  );
};
