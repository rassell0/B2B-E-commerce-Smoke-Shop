import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AllCategoriesScreen from './AllCategoriesScreen'
import ProductScreen from './ProductScreen'
const SearchContainer = () => {

const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={{
        tabBarStyle:{backgroundColor:"#081c08"},
        headerStyle:[{
          backgroundColor:"#081c08",
          
        }],
        headerTintColor:"white",
        headerTitleStyle:{
          fontFamily:"Manrope_500Medium"
        },
      }}>
        <Stack.Screen name='Search' component={AllCategoriesScreen}/>
        <Stack.Screen name='Smokeables' component={ProductScreen}/>
<Stack.Screen name='Edibles' component={ProductScreen}/>
        <Stack.Screen name='Rolling Paper' component={ProductScreen}/>
        <Stack.Screen name='Male Enhancement' component={ProductScreen}/>
        <Stack.Screen name='Accessories' component={ProductScreen}/>
        <Stack.Screen name='Tinctures' component={ProductScreen}/>
        <Stack.Screen name='Disposable Nicotine Vapes' component={ProductScreen}/>
        <Stack.Screen name='Topicals' component={ProductScreen}/>
        <Stack.Screen name='Tabacco Pipes' component={ProductScreen}/>
        

    </Stack.Navigator>
  )
}

export default SearchContainer