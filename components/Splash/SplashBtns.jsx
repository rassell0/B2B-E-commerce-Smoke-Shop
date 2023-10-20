import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {LinearGradient} from "expo-linear-gradient"


const SplashBtns = ({name,onPress}) => {
   
    
  return (
    <TouchableOpacity onPress={onPress} style={tw`w-40  p-4`}>
        <LinearGradient style={tw`items-center p-4 rounded-full border border-gray-600`} start={{x:0.1,y:0.3}} end={{x:0.6,y:0.9}} colors={[`#003300`,"#052000"] }>
      <Text style={[tw`text-white text-lg`,{fontFamily:"Manrope_600SemiBold",color:"#d9d9d9"}]}>{name}</Text>
        </LinearGradient>

    </TouchableOpacity>
  )
}

export default SplashBtns