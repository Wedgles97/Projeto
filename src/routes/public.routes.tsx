import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Login } from '@screens/index';
import { RoutesNames } from '@utils/enums/routes-names.enum';

const { Navigator, Screen } = createNativeStackNavigator();

export function PublicRoutes() {
  return (
    <Navigator>
      <Screen
        name={RoutesNames.Login}
        component={Login}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
