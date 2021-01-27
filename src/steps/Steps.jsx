import React from "react";
import { useSelector } from "react-redux";
import { StepBuildingType } from "./StepBuildingType";
import {
  selectCurrentStepName,
  STEP_BUILDING_HEIGHT,
  STEP_BUILDING_TYPE,
  STEP_ERROR,
  STEP_MATERIAL,
  STEP_RESULT,
  STEP_SIZES,
} from "../redux/reducer";
import { StepBuildingHeight } from "./StepBuildingHeight";
import { StepMaterial } from "./StepMaterial";
import { StepSizes } from "./StepSizes";
import { StepResult } from "./StepResult";
import { StepError } from "./StepError";

export const Steps = () => {
  const currentStep = useSelector(selectCurrentStepName);
  switch (currentStep) {
    case STEP_BUILDING_TYPE:
      return <StepBuildingType />;
    case STEP_BUILDING_HEIGHT:
      return <StepBuildingHeight />;
    case STEP_MATERIAL:
      return <StepMaterial />;
    case STEP_SIZES:
      return <StepSizes />;
    case STEP_ERROR:
      return <StepError />;
    case STEP_RESULT:
      return <StepResult />;
  }
  return <div></div>;
};
