import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontSize} from '../../theme/FontSizes';
import PropTypes from 'prop-types';

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
  },
  screenTitle: {
    flex: 1,
    fontFamily: 'CaviarDreams-Bold',
    fontSize: FontSize.h2,
    lineHeight: 32,
    textAlign: 'center',
  },
});

NavigationHeader.propTypes = {
  screenTitle: PropTypes.string,
};
