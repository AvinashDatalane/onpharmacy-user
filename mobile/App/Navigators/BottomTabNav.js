import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image } from 'react-native';
import Home from '../Screens/Home/Home';
import Signup from '../Screens/User Profile/Signup';
import Personal_Information1 from '../Screens/User Profile/Personal_Information1';
import Personal_Information2 from '../Screens/User Profile/Personal_Information2';
import Personal_Information3 from '../Screens/User Profile/Personal_Information3';
import Profile from '../Screens/Admin Flow/Profile';
import RequestStore from '../Screens/Admin Flow/RequestStore';
import NewBranch from '../Screens/Admin Flow/NewBranch';
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
      screenOptions={{ headerShown: false, tabBarVisible: false }}>
      <Stack.Screen component={Signup} name="Signup" />
      <Stack.Screen component={Personal_Information1} name="Personal_Information1" />
      <Stack.Screen component={Personal_Information2} name="Personal_Information2" />
      <Stack.Screen component={Personal_Information3} name="Personal_Information3" />
    </Stack.Navigator>
  );
};

const AdminFlow = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false, tabBarVisible: false }}>
      <Stack.Screen component={Profile} name="Profile" />
      <Stack.Screen component={RequestStore} name="RequestStore" />
      <Stack.Screen component={NewBranch} name="NewBranch" />
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
        component={AdminFlow}
        name="AdminFlow"
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
        component={screen}
        name="Store"
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
        component={screen}
        name="Order History"
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
