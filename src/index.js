import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Loading from './screens/components/loading';
import Login from './screens/containers/login';
import FormOne from './screens/containers/formOne';
import FormTwo from './screens/containers/formTwo';
import FormThree from './screens/containers/formThree';
import FormFour from './screens/containers/formFour';
import FormFive from './screens/containers/formFive';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      headerMode="none"
      screenOptions={{
        gestureEnabled: false,
        headerTintColor: 'transparent',
      }}>
      <Stack.Screen name="Loading" component={Loading} headerMode="none" />
      <Stack.Screen name="Login" component={Login} headerMode="none" />
      <Stack.Screen name="FormOne" component={FormOne} headerMode="none" />
      <Stack.Screen name="FormTwo" component={FormTwo} headerMode="none" />
      <Stack.Screen name="FormThree" component={FormThree} headerMode="none" />
      <Stack.Screen name="FormFour" component={FormFour} headerMode="none" />
      <Stack.Screen name="FormFive" component={FormFive} headerMode="none" />
    </Stack.Navigator>
  );
};

export default RootStack;
