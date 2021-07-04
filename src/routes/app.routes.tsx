import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/Home/HomeScreen';
import { SignInScreen } from '../screens/SignIn/SignInScreen';
import { theme } from '../global/styles/theme';
import AppointmentDetailsScreen from '../screens/AppointmentDetails/AppointmentDetailsScreen';
import AppointmentCreateScreen from '../screens/AppointmentCreate/AppointmentCreateScreen';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
      />
      <Screen
        name="AppointmentDetails"
        component={AppointmentDetailsScreen}
      />
      <Screen
        name="AppointmentCreate"
        component={AppointmentCreateScreen}
      />
    </Navigator>
  )
}