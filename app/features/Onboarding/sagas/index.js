import {takeLatest} from 'redux-saga/effects';
import * as type from '../redux/action/types';
import {fetchUserDetails} from './onboardingSaga';

export const onboardingSagas = [takeLatest(type.GET_USER, fetchUserDetails)];
