import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontSize} from '../../theme/FontSizes';
import {Colors} from '../../theme/Colors';

const AppFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {'Assignment - OrangeHRM \n Copy Rights'}
      </Text>
      <Text style={styles.link} dataDetectorType={'link'}>
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
  },
  title: {
    fontFamily: 'CaviarDreams-Bold',
    fontSize: FontSize.body1,
    textAlign: 'center',
    lineHeight: 20,
    color: Colors.text.PRIMARY_COLOR,
    marginBottom: 5,
  },
  link: {
    fontFamily: 'CaviarDreams-Italic',
    fontSize: FontSize.body3,
    textAlign: 'center',
    lineHeight: 14,
  },
});
