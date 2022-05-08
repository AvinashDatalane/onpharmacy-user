import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image } from 'react-native';
import Home from '../Screens/Home/Home';
import Signup from '../Screens/Order History/Signup';
import Personal_Information1 from '../Screens/Order History/Personal_Information1';
import Personal_Information2 from '../Screens/Order History/Personal_Information2';
import Personal_Information3 from '../Screens/Order History/Personal_Information3';
import icons from '../Assets/Icons/icons';
import SearchSVG from '../Assets/Icons/BottomTab/search.svg';
import HomeSVG from '../Assets/Icons/BottomTab/home.svg';
import StoreSVG from '../Assets/Icons/BottomTab/store.svg';
import ProfileSVG from '../Assets/Icons/BottomTab/profile.svg';
import OrderSVG from '../Assets/Icons/BottomTab/order.svg';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <Text>here</Text>
    </View>
  );
};

const userProfile = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Signup} name="Signup" />
    </Stack.Navigator>
  );
};

const PersonalInfo1 = () => {
  return (
    <Stack.Navigator
      initialRouteName="Personal_Information1"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Personal_Information1} name="Personal Info1" />
    </Stack.Navigator>
  );
};

const PersonalInfo2 = () => {
  return (
    <Stack.Navigator
      initialRouteName="Personal_Information2"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Personal_Information2} name="Personal Info2" />
    </Stack.Navigator>
  );
};

const PersonalInfo3 = () => {
  return (
    <Stack.Navigator
      initialRouteName="Personal_Information3"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Personal_Information3} name="Personal Info3" />
    </Stack.Navigator>
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
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <HomeSVG fill={color} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        component={PersonalInfo3}
        name="Personal Info3"
        options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <SearchSVG fill={color} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        component={PersonalInfo2}
        name="Personal Info2"
        options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <StoreSVG fill={color} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        component={PersonalInfo1}
        name="Personal Info1"
        options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <OrderSVG fill={color} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        component={userProfile}
        name="userProfile"
        options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarIcon: ({ color }) => {
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
