import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavigationHeader from '../../../components/NavigationHeader/NavigationHeader';
import ScreenPrimaryContainer from '../../../components/Containers/ScreenPrimaryContainer';
import AppFooter from '../../../components/AppFooter/AppFooter';
import {Colors} from '../../../theme/Colors';
import LoginView from '../views/LoginView';

const LoginScreen = props => {
  return (
    <View style={styles.screen}>
      <NavigationHeader screenTitle={'Assignment - OrangeHRM'} />
      <View style={styles.primaryContainer}>
        <ScreenPrimaryContainer>
          <LoginView navigation={props.navigation} />
        </ScreenPrimaryContainer>
      </View>

      <AppFooter />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.SCREEN_BACKGROUND_COLOR,
  },
  primaryContainer: {
    flex: 1,
  },
});
