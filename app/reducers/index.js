// Imports: Dependencies
import {combineReducers} from 'redux';
import {onboardingReducer} from '../features/Onboarding/redux/reducers/reducers';

// Imports: Reducers

// Redux: Root Reducer
const rootReducer = combineReducers({
  onboardingReducer,
});

// Exports
export default rootReducer;
