import createReducer from '../../../../helper/createReducer';
import {SET_USER} from '../action/types';
// Initial State
const initialState = {
  user: {
    name: 'xxx',
  },
};

export const onboardingReducer = createReducer(initialState, {
  [SET_USER](state, action) {
    return {
      ...state,
      user: action.payload,
    };
  },
});
