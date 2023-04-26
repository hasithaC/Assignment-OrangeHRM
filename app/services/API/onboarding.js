import Api from '..';
import Env from '../../config/environment/Index';
import {Method} from '../../config/method';
import {OnbardingApiEndPoint} from '../../constants/ApiEndPoint/Onboarding';

export function fetchAccessToken() {
  const body = {
    grant_type: 'client_credentials',
  };
  return Api(
    Env.BASE_URL,
    OnbardingApiEndPoint.ACCESS_TOKEN,
    Method.POST,
    null,
    body,
    true,
  );
}

export function fetchEmployeeId(token, body) {
  return Api(
    Env.BASE_URL,
    OnbardingApiEndPoint.EMPLOYEE_ID,
    Method.POST,
    token,
    body,
    false,
  );
}

export function fetchEmployeeContactDetails(token, userId) {
  return Api(
    Env.BASE_URL,
    OnbardingApiEndPoint.EMPLOYEE_CONTACT_DETAILS.replace('[USER_ID]', userId),
    Method.GET,
    token,
    null,
    false,
  );
}
