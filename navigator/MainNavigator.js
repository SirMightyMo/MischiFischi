import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'
import BuildScreen from '../screens/BuildScreen'
import CollectionScreen from '../screens/CollectionScreen'
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
    borderWidth: 0
  },
};

export default MainNavigator = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'white',
        headerStyle: { height: 0 },
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
        tabBarInactiveBackgroundColor: 'transparent',
        tabBarActiveBackgroundColor: Colors.buttonHighlight,
        tabBarItemStyle:{borderTopLeftRadius:10,borderTopRightRadius:10,borderWidth:0, borderColor: Colors.buttonHighlight},
        tabBarStyle:{backgroundColor:'#0c1935',borderWidth:0, borderColor: 'transparent'},
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Build') {
            iconName = focused ? 'build' : 'build-outline';
          } else if (route.name === 'Collection') {
            iconName = focused ? 'grid' : 'grid-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
        <Tab.Screen name='Build' component={BuildScreen} />
        <Tab.Screen name='Collection' component={CollectionScreen} />
      </Tab.Navigator>

    </NavigationContainer>
  )
} 