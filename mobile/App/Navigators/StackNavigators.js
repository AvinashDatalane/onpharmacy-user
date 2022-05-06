import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './BottomTabNav';
import ProductDetails from '../Screens/ProductDetails';
import WishlistScreen from '../Screens/WishlistScreen';
import CartScreen from '../Screens/CartScreen'

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
      <Stack.Screen component={ProductDetails} name="ProductDetails" />
      <Stack.Screen component={WishlistScreen} name="WishlistScreen" />
      <Stack.Screen component={CartScreen} name="CartScreen" />
    </Stack.Navigator>
  );
};

export default Router;
