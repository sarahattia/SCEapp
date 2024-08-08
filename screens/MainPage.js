import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapScreen from './MapScreen';
import PersonalAccount from './PersonalAccount';
import SearchScreen from './SearchScreen';

const Tab = createBottomTabNavigator();

export default function MainPage() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Map') {
              iconName = 'map';
            }
            else if (route.name === 'Search') {
              iconName = 'search';
            }else if (route.name === 'Personal') {
              iconName = 'person';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FFA500',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { display: 'flex' },
        })}
      >
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Personal" component={PersonalAccount} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
