import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/home_screen';
import QuizScreen from '../screens/quiz_screen';
import { HomeStackParamList, RootDrawerParamList } from './types';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ResultsScreen from '../screens/results_screen';
import DrawerContent from './drawer_content';

const Stack = createNativeStackNavigator<HomeStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

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
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen 
          name="Main" 
          component={HomeStack} 
          options={{ title: 'Ekran główny' }} 
        />
        <Drawer.Screen 
          name="Results" 
          component={ResultsScreen} 
          options={{ title: 'Wyniki' }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}