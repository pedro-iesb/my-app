// Router.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import TelaA from '../screens/TelaA/TelaA';
import TelaB from '../screens/TelaB/TelaB';


const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="TelaB">
        <Tab.Screen
          name="TelaA"
          component={TelaA}
          options={{
            tabBarLabel: 'TELA A',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="chevron-back-outline" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="TelaB"
          component={TelaB}
          options={{
            tabBarLabel: 'TELA B',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="chevron-forward-outline" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
