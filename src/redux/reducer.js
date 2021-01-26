import axios from "axios";

const SET_BUILDING_TYPE = "SET_BUILDING_TYPE";
const SET_BUILDING_HEIGHT = "SET_BUILDING_HEIGHT";
const SET_MATERIAL = "SET_MATERIAL";
const SET_SIZE_X = "SET_SIZE_X";
const SET_SIZE_Y = "SET_SIZE_Y";
const SET_CURRENT_STEP_NAME = "SET_CURRENT_STEP_NAME";
const INCREMENT_CURRENT_STEP_NUMBER = "INCREMENT_CURRENT_STEP_NUMBER";
const SET_SERVER_RESPONSE = "SET_SERVER_RESPONSE";
const RESET_ALL_DATA = "RESET_ALL_DATA";

const STEP_BUILDING_TYPE = "STEP_BUILDING_TYPE";
const STEP_BUILDING_HEIGHT = "STEP_BUILDING_HEIGHT";
const STEP_MATERIAL = "STEP_MATERIAL";
const STEP_SIZES = "STEP_SIZES";
const STEP_RESULT = "STEP_RESULT";
const STEP_ERROR = "STEP_ERROR";

const initState = {
  formData: {
    buildingType: null,
    buildingHeight: null,
    material: null,
    sizex: null,
    sizey: null,
  },
  currentStepName: STEP_BUILDING_TYPE,
  currentStepNumber: 1,
  serverResponse: {
    result: null,
    message: null,
  },
};

export const reducer = (state = initState, action) => {
  return state;
};

// thunks
export const nextStep = () => (dispatch, getState) => {
  const currentStepName = getState().currentStepName;
  switch (currentStepName) {
    case STEP_BUILDING_TYPE:
      getState().formData.buildingType === 1
        ? dispatch(setCurrentStepName(STEP_BUILDING_HEIGHT))
        : dispatch(setCurrentStepName(STEP_MATERIAL));
      break;
    case STEP_BUILDING_HEIGHT:
      dispatch(setCurrentStepName(STEP_MATERIAL));
      break;
    case STEP_MATERIAL:
      dispatch(setCurrentStepName(STEP_SIZES));
      break;
  }
  dispatch(incrementCurrentStepNumber());
};

export const calculate = () => async (dispatch, getState) => {
  const { buildingType, buildingHeight, material, sizex, sizey } = getState().formData;
  const queryParams = {
    building: buildingType,
    material: material,
    sizex: sizex,
    sizey: sizey,
  };
  if (buildingHeight !== null) queryParams.height = buildingHeight;
  try {
    const { data } = await axios("https://data.techart.ru/lab/json/", { queryParams });
    dispatch(setServerResponse(data));
    data.result === "ok" ? dispatch(setCurrentStepName(STEP_RESULT)) : dispatch(setCurrentStepName(STEP_ERROR));
  } catch (error) {
    alert(error);
    dispatch(resetAllData());
  }
};

// actions
export const setBuildingType = (type) => ({ type: SET_BUILDING_TYPE, payload: type });
export const setBuildingHeight = (height) => ({ type: SET_BUILDING_HEIGHT, payload: height });
export const setMaterial = (material) => ({ type: SET_MATERIAL, payload: material });
export const setSizeX = (size) => ({ type: SET_SIZE_X, payload: size });
export const setSizeY = (size) => ({ type: SET_SIZE_Y, payload: size });
export const resetAllData = () => ({ type: RESET_ALL_DATA });
const setCurrentStepName = (stepName) => ({ type: SET_CURRENT_STEP_NAME, payload: stepName });
const incrementCurrentStepNumber = () => ({ type: INCREMENT_CURRENT_STEP_NUMBER });
const setServerResponse = (serverResponse) => ({ type: SET_SERVER_RESPONSE, payload: serverResponse });
