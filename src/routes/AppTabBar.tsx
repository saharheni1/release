import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {mapScreenToProps} from './mapScreenToProps';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  return (
    <View>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const tabItem =
          mapScreenToProps[route.name as keyof typeof mapScreenToProps];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              params: route.params,
              merge: true,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabelledBy={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Text>{tabItem.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
