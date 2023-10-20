import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from './ProfileScreen'
import ChatScreen from './Chat/ChatScreen'

const ProfileContainer = () => {


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
<Stack.Screen options={{headerTitle:"Profile"}} name='main' component={ProfileScreen}/>
<Stack.Screen name='chat' component={ChatScreen}/>
</Stack.Navigator>
 
  )
}

export default ProfileContainer