import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { ThemeProvider } from 'react-native-elements'
import * as Notifications from 'expo-notifications';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import HomeScreen from './src/screens/HomeScreen'
import { StatusBar } from 'expo-status-bar'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
           <HomeScreen />
           <StatusBar  />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
