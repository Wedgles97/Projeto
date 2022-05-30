import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';

import { CadProduct } from '@screens/CadProduct';
import { Home } from '@screens/index';
import { ListProduct } from '@screens/ListProduct';
import { RoutesNames } from '@utils/enums/routes-names.enum';

const { Navigator, Screen } = createMaterialBottomTabNavigator();

export function PrivateRoutes() {
  return (
    <Navigator
      barStyle={{ backgroundColor: '#222831' }}
      initialRouteName="Home"
      activeColor="#f5f5f5"
      inactiveColor="#709fb0"
    >
      <Screen
        name="Cadastrar"
        component={CadProduct}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircle" color={color} size={22} />
          ),
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Screen
        name="Lista de Produtos"
        component={ListProduct}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <AntDesign name="bars" color={color} size={22} />
          ),
        }}
      />
    </Navigator>
  );
}
