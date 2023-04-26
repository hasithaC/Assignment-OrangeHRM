import createReducer from '../../../../helper/createReducer';
import {SET_ACCESS_TOKEN, SET_LOADING_SPINNER, SET_USER} from '../action/types';
// Initial State
const initialState = {
  user: {
    employeeId: '',
    employeeName: '',
    workEmail: '',
  },
  accessToken: '',
  loadingSpinnerVisibility: false,
};

export const onboardingReducer = createReducer(initialState, {
  [SET_USER](state, action) {
    return {
      ...state,
      user: action.payload,
    };
  },

  [SET_ACCESS_TOKEN](state, action) {
    return {
      ...state,
      accessToken: action.payload,
    };
  },

  [SET_LOADING_SPINNER](state, action) {
    return {
      ...state,
      loadingSpinnerVisibility: action.payload,
    };
  },
});
