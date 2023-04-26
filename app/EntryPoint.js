import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Root from './Root';
import {Provider} from 'react-redux';
import {store} from './store/store';

const EntryPoint = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Root />
      </View>
    </Provider>
  );
};

export default EntryPoint;
