import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as React from 'react';
import { Text, View } from 'react-native';

import { Header } from '@components/Header';
import { CadProduct } from '@screens/CadProduct';

function Feed() {
  return (
    <>
      <Header />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    </>
  );
}

function Profile() {
  return (
    <>
      <Header />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    </>
  );
}

function RegisterProduct() {
  return (
    <>
      <Header />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CadProduct />
      </View>
    </>
  );
}

function Configuration() {
  return (
    <>
      <Header />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Configuration!</Text>
      </View>
    </>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: '#222831' }}
      initialRouteName="Home"
      activeColor="#f5f5f5"
      inactiveColor="#709fb0"
    >
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={RegisterProduct}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Configuration"
        component={Configuration}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gear" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function Home() {
  return <MyTabs />;
}
