import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image} from 'react-native';
import Home from '../Screens/Home/Home';
import SearchScreen from '../Screens/SearchScreen';
import OrderScreen from '../Screens/OrderScreen'
import icons from '../Assets/Icons/icons';
import SearchSVG from '../Assets/Icons/BottomTab/search.svg';
import HomeSVG from '../Assets/Icons/BottomTab/home.svg';
import StoreSVG from '../Assets/Icons/BottomTab/store.svg';
import ProfileSVG from '../Assets/Icons/BottomTab/profile.svg';
import OrderSVG from '../Assets/Icons/BottomTab/order.svg';
import StoreScreen from '../Screens/StoreScreen'

const Tab = createBottomTabNavigator();

const Screen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <Text>here</Text>
    </View>
  );
};

const BottomTabNav = () => {
  // return <View/>
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: true,
        inactiveTintColor: '#4F4F4F',
        activeTintColor: '#70CDAC',
      }}>
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarIcon: ({color}) => {
            return (
              <View>
                <HomeSVG fill={color} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        component={SearchScreen}
        name="Search"
        options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarIcon: ({color}) => {
            return (
              <View>
                <SearchSVG fill={color} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        component={StoreScreen}
        name="Store"
        options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarIcon: ({color}) => {
            return (
              <View>
                <StoreSVG fill={color} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        component={OrderScreen}
        name="order History"
        options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarIcon: ({color}) => {
            return (
              <View>
                <OrderSVG fill={color} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        component={Screen}
        name="Profile"
        options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarIcon: ({color}) => {
            return (
              <View>
                <ProfileSVG fill={color} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
