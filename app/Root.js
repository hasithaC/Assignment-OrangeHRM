import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './navigations/NavigationStack';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {Colors} from './theme/Colors';
import {useSelector} from 'react-redux';
import {navigationRef} from './navigations/RootNavigation';

const Root = () => {
  const SPINNER_VISIBILITY = useSelector(
    state => state.onboardingReducer.loadingSpinnerVisibility,
  );
  return (
    <NavigationContainer ref={navigationRef}>
      <Spinner
        visible={SPINNER_VISIBILITY}
        overlayColor={Colors.spinner.OVERLAY_COLOR}
      />
      <NavigationStack />
    </NavigationContainer>
  );
};

export default Root;
