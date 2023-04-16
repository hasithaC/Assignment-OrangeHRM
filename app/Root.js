import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './navigations/NavigationStack';

const Root = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
};

export default Root;
