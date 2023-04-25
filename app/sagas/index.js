// Imports: Dependencies
import {all} from 'redux-saga/effects';
import {onboardingSagas} from '../features/Onboarding/sagas';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([...onboardingSagas]);
}
