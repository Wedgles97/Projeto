import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Home } from '@screens/index';
import { RoutesNames } from '@utils/enums/routes-names.enum';

const { Navigator, Screen } = createNativeStackNavigator();

export function PrivateRoutes() {
  return (
    <Navigator>
      <Screen name={RoutesNames.Home} component={Home} />
    </Navigator>
  );
}
