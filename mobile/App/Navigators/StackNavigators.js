import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNav from './BottomTabNav';

const Stack = createStackNavigator();

const Screen = () => {
  return <BottomTabNav />;
};


const Router = () => {
  return (
    <Stack.Navigator initialRouteName="BottamTab" screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Screen} name="BottamTab" />
      <Stack.Screen component={Screen} name="AdminFlow" />
      <Stack.Screen component={Screen} name="userProfile" />
    </Stack.Navigator>
  );
};


export default Router;