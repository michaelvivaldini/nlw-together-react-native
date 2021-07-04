import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes'
import { useAuth } from '../hooks/auth';
import { SignInScreen } from '../screens/SignIn/SignInScreen';

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <SignInScreen />}
    </NavigationContainer>
  )
}