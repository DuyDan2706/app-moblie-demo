import React from 'react'
import { View,Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GirlScreen from './GirlScreen';
import BoyScreen from './BoyScreen';

const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
  <Tab.Navigator>
    <Tab.Screen name="Gấu cái" options={{tabBarIcon: () => <Text>😉</Text>}} component={GirlScreen} />
    <Tab.Screen name="Gấu đực" options={{tabBarIcon: () => <Text>😎</Text>}} component={BoyScreen} />

  </Tab.Navigator>
  )
}

export default HomeScreen