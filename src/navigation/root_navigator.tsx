import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/home_screen';
import QuizScreen from '../screens/quiz_screen';
import { HomeStackParamList } from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Quiz' }} />
      <Stack.Screen name="Quiz" component={QuizScreen} options={{ title: 'Test' }} />
    </Stack.Navigator>
  );
}


export default function RootNavigator() {
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
}