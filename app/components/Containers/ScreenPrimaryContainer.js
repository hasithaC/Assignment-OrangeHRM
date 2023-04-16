import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import {Colors} from '../../theme/Colors';

const ScreenPrimaryContainer = props => {
  return (
    <SafeAreaView style={styles.PrimaryContainer}>
      <ScrollView
        contentContainerStyle={styles.PrimaryContainer}
        showsVerticalScrollIndicator={false}>
        <View style={{...styles.ContentContainer, ...props.style}}>
          {props.children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenPrimaryContainer;

const styles = StyleSheet.create({
  PrimaryContainer: {
    flexGrow: 1,
  },
  ContentContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: Colors.SCREEN_BACKGROUND_COLOR,
  },
});

ScreenPrimaryContainer.propTypes = {
  children: PropTypes.element,
  style: PropTypes.object,
};
