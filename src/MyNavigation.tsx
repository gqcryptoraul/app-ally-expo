import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './components/screens/Welcome';
import SignIn from './components/screens/SignIn';
import Reloj from './components/screens/Reloj';
import {Neumorphism} from './Neumorphism/Dashboard/Dashboard';

const Stack = createNativeStackNavigator();

export default function MyNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashborad"
          component={Neumorphism}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Reloj"
          component={Reloj}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
