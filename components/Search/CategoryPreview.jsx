import { View, Text,Image, ImageBackground ,TouchableOpacity,Dimensions} from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc"


  import {LinearGradient} from "expo-linear-gradient"
     
const CategoryPreview = ({pic,onPress , name}) => {
  const w = Dimensions.get("screen").width



  return (
    <TouchableOpacity onPress={onPress} style={[tw` mb-4  `,{height:422,width:190}]}>
      <ImageBackground style={tw`flex-1 rounded-md justify-end`}  imageStyle={tw`border border-gray-600`} source={pic} >
      
      </ImageBackground>
      <LinearGradient style={tw`items-center p-2 h-20 justify-center  border border-gray-600`} start={{x:0.1,y:0.3}} end={{x:0.6,y:0.9}} colors={[`#113306`,"#125c09"] }>
      <Text style={[tw`text-white text-lg text-center`,{fontFamily:"Manrope_500Medium"}]}>{name}</Text>
        </LinearGradient>
    </TouchableOpacity>
  )
}

export default CategoryPreview