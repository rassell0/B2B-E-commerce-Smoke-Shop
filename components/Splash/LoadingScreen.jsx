import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const LoadingScreen = () => {
  return (
    <View style={[tw`flex-1 items-center justify-center`,{backgroundColor:"#030d03"}]}> 
    <ActivityIndicator size={"large"}/>
    </View>
  )
}

export default LoadingScreen