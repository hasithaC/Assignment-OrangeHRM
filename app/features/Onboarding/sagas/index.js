import {takeLatest} from 'redux-saga/effects';
import * as type from '../redux/action/types';
import {fetchAccessTokenResponse} from './onboardingSaga';

export const onboardingSagas = [
  takeLatest(type.GET_ACCESS_TOKEN, fetchAccessTokenResponse),
];
