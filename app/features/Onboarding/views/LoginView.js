import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {FontSize} from '../../../theme/FontSizes';
import {Colors} from '../../../theme/Colors';
import {Images} from '../../../theme/Images';
import PropTypes from 'prop-types';
import {StackActions} from '@react-navigation/native';

const LoginView = props => {
  const [userName, setUserName] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'User Name'}
        value={userName}
        keyboardType="default"
        onChangeText={value => setUserName(value)}
        style={styles.input}
      />

      <TextInput
        placeholder={'Password'}
        value={userName}
        keyboardType="default"
        onChangeText={value => setUserName(value)}
        style={styles.input}
      />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={Images.orange_hrm}
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() =>
          props.navigation.dispatch(StackActions.replace('HomeScreen'))
        }>
        <Text style={styles.loginButtonText}>{'Login'}</Text>
      </TouchableOpacity>

      <Text style={styles.instagramLogin}>{'Login with Instagram'}</Text>
    </View>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontFamily: 'CaviarDreams-Bold',
    fontSize: FontSize.h5,
    textAlign: 'center',
    width: '50%',
    borderWidth: 1,
    borderColor: Colors.text_input.BORDER_COLOR,
    borderRadius: 4,
    color: Colors.text.PRIMARY_COLOR,
    padding: 8,
    marginVertical: 8,
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
  loginButtonText: {
    fontFamily: 'CaviarDreams-Bold',
    fontSize: FontSize.h5,
    textAlign: 'center',
    color: Colors.text.BUTTON_TEXT_COLOR,
  },
  instagramLogin: {
    fontFamily: 'CaviarDreams-Italic',
    fontSize: FontSize.h5,
    textAlign: 'center',
    marginVertical: 8,
    color: Colors.text.PRIMARY_COLOR,
  },
  image: {
    width: 72,
    height: 72,
    marginVertical: 8,
  },
});

LoginView.propTypes = {
  navigation: PropTypes.object,
};
