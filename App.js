import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import First from './first';  // Import your first screen
import SettingsScreen from './SettingsScreen'; // Import the settings screen
import Host from './host'; // Import the settings screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={First} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Host" component={Host} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
