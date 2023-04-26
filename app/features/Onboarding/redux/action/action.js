import {
  GET_ACCESS_TOKEN,
  GET_USER,
  SET_ACCESS_TOKEN,
  SET_LOADING_SPINNER,
  SET_USER,
} from './types';

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

export const setAccessToken = token => {
  return {
    type: SET_ACCESS_TOKEN,
    payload: token,
  };
};
export const getAccessToken = auth => {
  return {
    type: GET_ACCESS_TOKEN,
    payload: auth,
  };
};

export const setLoadingSpinner = visibility => {
  return {
    type: SET_LOADING_SPINNER,
    payload: visibility,
  };
};
