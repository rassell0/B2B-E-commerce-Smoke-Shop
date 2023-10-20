import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {LinearGradient} from "expo-linear-gradient"

const CheckoutBtn = ({onPress}) => {
 
  return (
    <TouchableOpacity onPress={onPress}  style={tw`py-2 px-4`}>
    <LinearGradient style={tw`items-center p-4 rounded-full border border-gray-600`} start={{x:0.1,y:0.3}} end={{x:0.6,y:0.9}} colors={["#007300","#006700","#015301"] }>

  <Text style={[tw`text-white text-lg`,{fontFamily:"Manrope_600SemiBold"}]}>Checkout</Text>
  
    </LinearGradient>

</TouchableOpacity>
  )
}

export default CheckoutBtn