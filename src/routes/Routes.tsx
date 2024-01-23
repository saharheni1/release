import React from 'react';
import {ActivityIndicator, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

export function Router() {
  const authCredentials = false; // this needs to be set based on a auth credentials later on
  const isLoading = false;
  if (isLoading) {
    return (
      <SafeAreaView
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
          },
        ]}>
        <Text>Loading...</Text>
        <ActivityIndicator size={'large'} />
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
