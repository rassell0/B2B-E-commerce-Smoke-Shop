import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import ContinueBtn from './ContinueBtn';
const PromotionBtn = ({data}) => {
  
  const {path,header,subHeader} = data
      
  return ( 
    <View style={[tw``,{width:"100%",height:450}]}>
      <ImageBackground imageStyle={[tw` border border-gray-600`]} style={tw`flex-1 justify-end`} source={path}>

<View style={tw`flex-row justify-between items-center p-2`}>
    <View>
    <Text style={[tw` text-4xl`,{fontFamily:"Manrope_700Bold",color:"#f1ebeb"}]}>{header}</Text>
    <Text style={[tw`text-base`,{fontFamily:"Manrope_500Medium",color:"#f1ebeb"}]}>{subHeader}</Text>
    </View>

    <ContinueBtn/>
</View>

      </ImageBackground>
    </View>
  )
}

export default PromotionBtn