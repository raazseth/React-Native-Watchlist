import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './Screens/Home';
import Add from './Screens/Add';
import Search from './Screens/Search';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Add" component={Add} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
