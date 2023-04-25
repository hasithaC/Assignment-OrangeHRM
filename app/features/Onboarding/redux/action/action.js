import {GET_USER, SET_USER} from './types';

export const setUser = details => {
  return {
    type: SET_USER,
    payload: details,
  };
};
export const getUser = () => {
  return {
    type: GET_USER,
  };
};
