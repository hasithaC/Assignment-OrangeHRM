import {Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontSize} from '../../theme/FontSizes';
import {Colors} from '../../theme/Colors';
import {OnboardingUrl} from '../../constants/UrlConstants/Onboarding';

const AppFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {'Assignment - OrangeHRM \n Copy Rights'}
      </Text>
      <Text
        style={styles.link}
        dataDetectorType={'link'}
        onPress={() => {
          try {
            Linking.openURL(OnboardingUrl.LINK_TO_WEB);
          } catch (error) {
            console.log(error);
          }
        }}>
        {' Link to Web'}
      </Text>
    </View>
  );
};

export default AppFooter;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 8,
    marginBottom: 8,
  },
  title: {
    fontFamily: 'CaviarDreams-Bold',
    fontSize: FontSize.h4,
    textAlign: 'center',
    lineHeight: 20,
    color: Colors.text.PRIMARY_COLOR,
    marginBottom: 5,
  },
  link: {
    fontFamily: 'CaviarDreams-Italic',
    fontSize: FontSize.body1,
    color: Colors.text.LINK_TEXT_COLOR,
    textAlign: 'center',
    lineHeight: 14,
  },
});
