import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import NavigationHeader from '../../../components/NavigationHeader/NavigationHeader';
import ScreenPrimaryContainer from '../../../components/Containers/ScreenPrimaryContainer';
import AppFooter from '../../../components/AppFooter/AppFooter';
import UserDetails from '../views/UserDetails';

const HomeScreen = props => {
  return (
    <View style={styles.screen}>
      <NavigationHeader screenTitle={'Assignment - OrangeHRM'} />
      <View style={styles.primaryContainer}>
        <ScreenPrimaryContainer>
          <UserDetails navigation={props.navigation} />
        </ScreenPrimaryContainer>
      </View>
      <AppFooter />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.SCREEN_BACKGROUND_COLOR,
  },
  primaryContainer: {
    flex: 1,
  },
});
