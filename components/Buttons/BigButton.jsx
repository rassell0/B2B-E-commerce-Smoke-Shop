import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {LinearGradient} from "expo-linear-gradient"

const BigBtn = ({name,onPress}) => {
  
    
  return (
    <TouchableOpacity onPress={onPress} style={[tw` `,{minWidth:"80%"}]}>
        <LinearGradient style={tw`items-center p-4 rounded-full border border-gray-600`} start={{x:0.1,y:0.3}} end={{x:0.6,y:0.9}} colors={[`#003300`,"#052000"] }>
      <Text style={[tw`text-white text-base`,{fontFamily:"Manrope_500Medium"}]}>{name}</Text>
        </LinearGradient>

    </TouchableOpacity>
  )
}

export default BigBtn