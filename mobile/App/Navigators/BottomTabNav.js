import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image} from 'react-native';
import Home from '../Screens/Home/Home';
import icons from '../Assets/Icons/icons';
import SearchSVG from '../Assets/Icons/BottomTab/search.svg';
import HomeSVG from '../Assets/Icons/BottomTab/home.svg';
import StoreSVG from '../Assets/Icons/BottomTab/store.svg';
import ProfileSVG from '../Assets/Icons/BottomTab/profile.svg';
import OrderSVG from '../Assets/Icons/BottomTab/order.svg';

const Tab = createBottomTabNavigator();

const screen = () => {
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
        component={screen}
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
        component={screen}
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
        component={screen}
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
        component={screen}
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
