import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMaterial, setMaterial } from "../redux/reducer";

export const HouseMaterial = () => {
  const dispatch = useDispatch();
  const material = useSelector(selectMaterial);
  return (
    <div className="inputs__wrapper">
      <div className="radio">
        <label>
          <input type="radio" name="material" onChange={() => dispatch(setMaterial(1))} checked={material === 1} />
          Кирпич
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="material" onChange={() => dispatch(setMaterial(2))} checked={material === 2} />
          Шлакоблок
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="material" onChange={() => dispatch(setMaterial(3))} checked={material === 3} />
          Деревянный брус
        </label>
      </div>
    </div>
  );
};
