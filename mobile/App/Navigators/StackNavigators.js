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
      <Stack.Screen component={Screen} name="userProfile" />
      <Stack.Screen component={Screen} name="PersonalInfo1" />
      <Stack.Screen component={Screen} name="PersonalInfo2" />
      <Stack.Screen component={Screen} name="PersonalInfo3" />
    </Stack.Navigator>
  );
};

export default Router;