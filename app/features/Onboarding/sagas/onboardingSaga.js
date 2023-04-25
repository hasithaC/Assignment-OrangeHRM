import {put} from 'redux-saga/effects';
import {setUser} from '../redux/action/action';

// Increase Counter Async
export function* fetchUserDetails(action) {
  try {
    const user = {
      name: 'Hasitha',
    };
    yield put(setUser(user));
  } catch (error) {
    console.log(error);
  }
}
