import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {Ionicons} from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient'
const Info = () => {
  return (
    <View style={tw`m-4`}>
        <View style={tw`flex-row justify-between my-4`}>
<LinearGradient  start={{x:0.1,y:0.3}} end={{x:0.6,y:0.9}} colors={[`#003300`,"#052000"]} style={[tw`h-45 w-2.4/5 items-center justify-around border border-gray-600`,{backgroundColor:"#0d3b0a"}]}>
    <Ionicons name='mail-outline' color={"#f1ebeb"} size={35}/>
        <Text style={[tw`text-center text-xl`,{fontFamily:"Manrope_700Bold",color:"#f1ebeb"}]}>Email Us</Text>
        <Text style={[tw`text-center `,{fontFamily:"Manrope_700Bold",color:"#f1ebeb"}]}>For Additional Information, Please Contact Us</Text>
     </LinearGradient>
     <LinearGradient  start={{x:0.1,y:0.3}} end={{x:0.6,y:0.9}} colors={[`#003300`,"#052000"]} style={[tw`h-45 w-2.4/5 items-center justify-around border border-gray-600`,{backgroundColor:"#0d3b0a"}]}>
     <Ionicons name='car-outline' color={"#f1ebeb"} size={40}/>
        <Text style={[tw`text-center text-xl`,{fontFamily:"Manrope_700Bold",color:"#f1ebeb"}]}>Delivery</Text>
        <Text style={[tw`text-center `,{fontFamily:"Manrope_700Bold",color:"#f1ebeb"}]}>We Provide Domestic Shipping</Text>
     </LinearGradient>
        </View>
      <View style={tw`flex-row justify-between my-4`}>
        <LinearGradient  start={{x:0.1,y:0.3}} end={{x:0.6,y:0.9}} colors={[`#003300`,"#052000"]} style={[tw`h-45 w-2.4/5 items-center justify-around border border-gray-600`,{backgroundColor:"#0d3b0a"}]}>
    <Ionicons name='card-outline' color={"#f1ebeb"} size={35}/>
        <Text style={[tw`text-center text-xl`,{fontFamily:"Manrope_700Bold",color:"#f1ebeb"}]}>Secure Payment</Text>
        <Text style={[tw`text-center `,{fontFamily:"Manrope_700Bold",color:"#f1ebeb"}]}>We ensure secure payments with all payment methids</Text>
     </LinearGradient>
     <LinearGradient  start={{x:0.1,y:0.3}} end={{x:0.6,y:0.9}} colors={[`#003300`,"#052000"]} style={[tw`h-45 w-2.4/5 items-center justify-around border border-gray-600`,{backgroundColor:"#0d3b0a"}]}>
     <Ionicons name='cash-outline' color={"#f1ebeb"} size={35}/>
        <Text style={[tw`text-center text-xl`,{fontFamily:"Manrope_700Bold",color:"#f1ebeb"}]}>Refund Policy</Text>
        <Text style={[tw`text-center `,{fontFamily:"Manrope_700Bold",color:"#f1ebeb"}]}>2-Weeks after receiving your item to request a return</Text>
     </LinearGradient></View>
        </View>
   
  )
}

export default Info