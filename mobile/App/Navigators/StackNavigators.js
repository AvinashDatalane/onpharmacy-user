import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from '@react-navigation/stack';
import BottomTabNav from './BottomTabNav';
import {Text, View} from 'react-native';

const Stack = createStackNavigator();

const Screen = () => {
  return <BottomTabNav />;
};

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottamTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={Screen} name="BottamTab" />
    </Stack.Navigator>
  );
};

export default Router;
