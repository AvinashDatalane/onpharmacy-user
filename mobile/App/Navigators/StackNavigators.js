import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CheckoutPart1 from '../Screens/Checkout/CheckoutPart1';
import CheckoutPart2 from '../Screens/Checkout/CheckoutPart2';
import CheckoutPart3 from '../Screens/Checkout/CheckoutPart3';
import CheckoutPart4 from '../Screens/Checkout/CheckoutPart4';
import Offer from '../Screens/AdminFlow/Offer';
import BottomTabNav from './BottomTabNav';

const Stack = createStackNavigator();

const Screen = () => {
  return <BottomTabNav />;
};

const PaymentScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="CheckoutPart1"
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={CheckoutPart1} name="CheckoutPart1" />
      <Stack.Screen component={CheckoutPart2} name="CheckoutPart2" />
      <Stack.Screen component={CheckoutPart3} name="CheckoutPart3" />
      <Stack.Screen component={CheckoutPart4} name="CheckoutPart4" />
    </Stack.Navigator>
  );
};

const Admin = () => {
  return (
    <Stack.Navigator
      initialRouteName="Offer"
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={Offer} name="Offer" />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottamTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={Screen} name="BottamTab" />
      <Stack.Screen component={PaymentScreen} name="PaymentScreen" />
      <Stack.Screen component={Admin} name="Admin" />
    </Stack.Navigator>
  );
};

export default Router;
