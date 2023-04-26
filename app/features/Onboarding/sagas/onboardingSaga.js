import {call, put, select} from 'redux-saga/effects';
import {
  fetchAccessToken,
  fetchEmployeeContactDetails,
  fetchEmployeeId,
} from '../../../services/API/onboarding';
import {
  setAccessToken,
  setLoadingSpinner,
  setUser,
} from '../redux/action/action';
import {AccessToken} from '../redux/selectors';
import * as RootNavigation from '../../../navigations/RootNavigation';

export function* fetchUserDetails(action) {
  let accessToken = '';
  let auth = {
    username: '',
    password: '',
  };
  let employeeId = '';
  try {
    auth = action.payload;
    accessToken = yield select(AccessToken);

    const employee_id_response = yield call(fetchEmployeeId, accessToken, auth);

    employeeId = employee_id_response.user.employeeId;

    const employee_contact_details_response = yield call(
      fetchEmployeeContactDetails,
      accessToken,
      employeeId,
    );

    const user = {
      employeeName: employee_id_response.user.employeeName,
      employeeId: employeeId,
      workEmail: employee_contact_details_response.data.workEmail,
    };
    yield put(setUser(user));

    yield put(setLoadingSpinner(false));
    RootNavigation.replace('HomeScreen');
  } catch (error) {
    console.log(error);

    yield put(setLoadingSpinner(false));
  }
}

export function* fetchAccessTokenResponse(action) {
  let accessToken = '';
  try {
    const response = yield call(fetchAccessToken);
    accessToken = response.access_token;
    yield put(setAccessToken(accessToken));
    yield* fetchUserDetails(action);
  } catch (error) {
    console.log(error);

    yield put(setLoadingSpinner(false));
  }
}
