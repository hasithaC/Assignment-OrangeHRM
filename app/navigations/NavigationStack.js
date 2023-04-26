import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../features/Onboarding/screens/LoginScreen';
import HomeScreen from '../features/Home/screens/HomeScreen';

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default NavigationStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
