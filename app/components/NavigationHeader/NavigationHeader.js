import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontSize} from '../../theme/FontSizes';
import PropTypes from 'prop-types';
import {Colors} from '../../theme/Colors';

const NavigationHeader = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>{props.screenTitle}</Text>
    </View>
  );
};

export default NavigationHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: Colors.SCREEN_BACKGROUND_COLOR,
  },
  screenTitle: {
    flex: 1,
    fontFamily: 'CaviarDreams-Bold',
    fontSize: FontSize.h2,
    lineHeight: 32,
    textAlign: 'center',
    color: Colors.text.PRIMARY_COLOR,
  },
});

NavigationHeader.propTypes = {
  screenTitle: PropTypes.string,
};
