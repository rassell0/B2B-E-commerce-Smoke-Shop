import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { LinearGradient } from 'expo-linear-gradient'
const Footer = ({add2Cart}) => {
  return (
    <View style={tw`flex-row mb-6 `}>
    <TouchableOpacity style={[tw`mr-4 `,{minWidth:"45%"}]}>
        <LinearGradient style={tw`items-center p-4 rounded-full border border-gray-600`} start={{x:0.1,y:0.3}} end={{x:0.6,y:0.9}} colors={[`#003300`,"#052000"] }>
      <Text style={[tw`text-white text-base`,{fontFamily:"Manrope_500Medium"}]}>Chat Now</Text>
        </LinearGradient>
    </TouchableOpacity>
    <TouchableOpacity onPress={add2Cart} style={[tw`ml-4 `,{minWidth:"45%"}]}>
        <LinearGradient style={tw`items-center p-4 rounded-full border border-gray-600`} start={{x:0.1,y:0.3}} end={{x:0.6,y:0.9}} colors={[`#003300`,"#052000"] }>
      <Text style={[tw`text-white text-base`,{fontFamily:"Manrope_500Medium"}]}>Start Order</Text>
        </LinearGradient>
    </TouchableOpacity>
    </View>
  )
}

export default Footer