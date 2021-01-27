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

export const STEP_BUILDING_TYPE = "STEP_BUILDING_TYPE";
export const STEP_BUILDING_HEIGHT = "STEP_BUILDING_HEIGHT";
export const STEP_MATERIAL = "STEP_MATERIAL";
export const STEP_SIZES = "STEP_SIZES";
export const STEP_RESULT = "STEP_RESULT";
export const STEP_ERROR = "STEP_ERROR";

const initState = {
  formData: {
    buildingType: 1,
    buildingHeight: null,
    material: 1,
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
  switch (action.type) {
    case SET_BUILDING_TYPE:
      return {
        ...state,
        formData: {
          ...state.formData,
          buildingType: action.payload,
        },
      };
    case SET_BUILDING_HEIGHT:
      return {
        ...state,
        formData: {
          ...state.formData,
          buildingHeight: action.payload,
        },
      };
    case SET_MATERIAL:
      return {
        ...state,
        formData: {
          ...state.formData,
          material: action.payload,
        },
      };
    case SET_SIZE_X:
      return {
        ...state,
        formData: {
          ...state.formData,
          sizex: action.payload,
        },
      };
    case SET_SIZE_Y:
      return {
        ...state,
        formData: {
          ...state.formData,
          sizey: action.payload,
        },
      };
    case SET_CURRENT_STEP_NAME:
      return {
        ...state,
        currentStepName: action.payload,
      };
    case INCREMENT_CURRENT_STEP_NUMBER:
      return {
        ...state,
        currentStepNumber: state.currentStepNumber + 1,
      };
    case SET_SERVER_RESPONSE:
      return {
        ...state,
        serverResponse: action.payload,
      };
    case RESET_ALL_DATA:
      return initState;

    default:
      return state;
  }
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
    height: buildingHeight,
    sizex: sizex,
    sizey: sizey,
  };
  try {
    const { data } = await axios.get("https://data.techart.ru/lab/json/", { params: queryParams });
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

//selectors
export const selectBuildingType = (state) => state.formData.buildingType;
export const selectBuildingHeight = (state) => state.formData.buildingHeight;
export const selectMaterial = (state) => state.formData.material;
export const selectSizeX = (state) => state.formData.sizex;
export const selectSizeY = (state) => state.formData.sizey;
export const selectResponseMessage = (state) => state.serverResponse.message;

export const selectCurrentStepName = (state) => state.currentStepName;
export const selectCurrentStepNumber = (state) => state.currentStepNumber;
