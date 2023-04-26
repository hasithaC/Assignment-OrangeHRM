import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {Images} from '../../../theme/Images';
import {FontSize} from '../../../theme/FontSizes';
import {Colors} from '../../../theme/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {StackActions} from '@react-navigation/native';
import {setUser} from '../../Onboarding/redux/action/action';

const UserDetails = props => {
  const dispatch = useDispatch();
  const USER = useSelector(state => state.onboardingReducer.user);
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={Images.default_user}
        />
        <Text style={styles.userDetailsText}>
          {'Name : ' + USER.employeeName}
        </Text>
        <Text style={styles.userDetailsText}>
          {'UserDetails : ' + USER.workEmail}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          const user = {
            employeeId: '',
            employeeName: '',
            workEmail: '',
          };
          dispatch(setUser(user));
          props.navigation.dispatch(StackActions.replace('LoginScreen'));
        }}>
        <Text style={styles.logoutButtonText}>{'Logout'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.SCREEN_BACKGROUND_COLOR,
  },
  detailsContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.SCREEN_BACKGROUND_COLOR,
  },
  image: {
    width: 120,
    height: 180,
  },
  userDetailsText: {
    fontFamily: 'CaviarDreams-Bold',
    fontSize: FontSize.h5,
    textAlign: 'center',
    color: Colors.text.PRIMARY_COLOR,
    marginVertical: 4,
  },
  loginButton: {
    width: '30%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.button.BORDER_COLOR,
    borderRadius: 4,
    marginVertical: 8,
    padding: 8,
    backgroundColor: Colors.button.BACKGROUND_COLOR,
  },
  logoutButtonText: {
    fontFamily: 'CaviarDreams-Bold',
    fontSize: FontSize.h5,
    textAlign: 'center',
    color: Colors.text.BUTTON_TEXT_COLOR,
  },
});

UserDetails.propTypes = {
  navigation: PropTypes.object,
};
