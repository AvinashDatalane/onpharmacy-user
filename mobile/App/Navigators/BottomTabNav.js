import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image} from 'react-native';
import Home from '../Screens/Home/Home';
import icons from '../Assets/Icons/icons';

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
          tabBarIcon: () => {
            return <Image source={icons.home} />;
          },
        }}
      />
      <Tab.Screen
        component={screen}
        name="Search"
        options={{headerShown: false, tabBarVisible: false}}
      />
      <Tab.Screen
        component={screen}
        name="Store"
        options={{headerShown: false, tabBarVisible: false}}
      />
      <Tab.Screen
        component={screen}
        name="Profile"
        options={{headerShown: false, tabBarVisible: false}}
      />
      <Tab.Screen
        component={screen}
        name="more"
        options={{headerShown: false, tabBarVisible: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
