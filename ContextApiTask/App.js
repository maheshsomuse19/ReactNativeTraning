import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import AboutScreen from './src/Screens/AboutScreen';
import ContextState from './src/Data/ContextState';
// import ContextState from './src/Data/ContextState';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <ContextState>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextState>
  );
};

export default App;

const styles = StyleSheet.create({});
