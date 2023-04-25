import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Root from './Root';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Counter from './screens/Counter';

const EntryPoint = () => {
  return (
    <Provider store={store}>
    {/* <View style={{flex: 1}}>
      <Root />
    </View> */}
    <Counter />
    </Provider>
  );
};

export default EntryPoint;
