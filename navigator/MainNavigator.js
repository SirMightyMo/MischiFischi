import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'
import BuildScreen from '../screens/BuildScreen'
import ShareScreen from '../screens/ShareScreen'

const Tab = createBottomTabNavigator();

export default MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'red',
        headerStyle: { height: 0 },
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Build') {
            iconName = 'ios-home';
          } else if (route.name === 'Share') {
            iconName = focused ? 'ios-star' : 'ios-star-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
        <Tab.Screen name='Build' component={BuildScreen} />
        <Tab.Screen name='Share' component={ShareScreen} />
      </Tab.Navigator>

    </NavigationContainer>
  )
} 