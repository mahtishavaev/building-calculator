import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMaterial, setMaterial } from "../redux/reducer";

export const GarageMaterial = () => {
  const dispatch = useDispatch();
  const material = useSelector(selectMaterial);
  useEffect(() => dispatch(setMaterial(2)), []);
  return (
    <div className="inputs__wrapper">
      <div className="radio">
        <label>
          <input type="radio" name="material" onChange={() => dispatch(setMaterial(2))} checked={material === 2} />
          Шлакоблок
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="material" onChange={() => dispatch(setMaterial(4))} checked={material === 4} />
          Металл
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="material" onChange={() => dispatch(setMaterial(5))} checked={material === 5} />
          Сендвич-панели
        </label>
      </div>
    </div>
  );
};
