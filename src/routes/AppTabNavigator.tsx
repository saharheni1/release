import React from 'react';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  // NewPostScreen: undefined;
  // FavoriteScreen: undefined;
  // MyProfileScreen: undefined;
};

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {HomeScreen} from '@screens';

import {AppTabBar} from './AppTabBar';

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      {/* All the other tab screens go here */}
    </Tab.Navigator>
  );
}
