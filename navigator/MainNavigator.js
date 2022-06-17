import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'
import BuildScreen from '../screens/BuildScreen'
import CollectionScreen from '../screens/CollectionScreen'
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();

export default MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'red',
        headerStyle: { height: 0 },
        tabBarInactiveTintColor: 'gray',
        tabBarInactiveBackgroundColor: Colors.buttonBackground,
        tabBarActiveBackgroundColor: Colors.buttonHighlight,
        tabBarItemStyle:{borderTopLeftRadius:10,borderTopRightRadius:10,borderWidth:0},
        tabBarStyle:{backgroundColor:Colors.bgGradientBottom,borderWidth:0},
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