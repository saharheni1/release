import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppTabBottomTabParamList, AppTabNavigator} from './AppTabNavigator';

const Stack = createNativeStackNavigator();

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
};

export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="AppTabNavigator"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      {/* ...All the other screens */}
    </Stack.Navigator>
  );
}
