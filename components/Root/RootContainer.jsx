import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Splash/SplashScreen';
import TabContainer from './TabContainer';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import LoadApp from '../Splash/LoadApp';
const RootContainer = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='load' component={LoadApp}/>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name='main' component={TabContainer}/>
      </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    
  )
}

export default RootContainer