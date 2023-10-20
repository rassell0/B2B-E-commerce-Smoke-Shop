import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import PlusMinusBtn from './PlusMinusBtn'

const CartItem = ({data}) => {
   
const {uri,price,name,quantity} = data
console.log(data)
//#0c390c #004b00
  return (
    <View style={[tw` rounded-2xl w-90 h-40  border flex-row justify-around items-center border-gray-400 `,{backgroundColor:"#0c390c"}]}>
        <View style={tw`flex-3  items-center`}>
         <Image source={{uri}} style={tw`h-35 w-35 rounded-full bg-white`}/>   
        </View>
      
      <View style={tw`flex-3  h-1/1  justify-around items-center`}>
<Text style={[tw`text-xl text-white text-center`,{fontFamily:"Manrope_700Bold"}]}>{name}</Text>
<Text style={[tw`text-lg text-white text-center`,{fontFamily:"Manrope_800ExtraBold"}]}>$20.00</Text>
      </View>
      <View style={tw`flex-1  h-1/1 items-center justify-around`}>
        <PlusMinusBtn type={"add-outline"}/>
     <Text style={tw`text-2xl mr-1 text-white`}> {quantity}</Text>  
     <PlusMinusBtn type={"remove-outline"}/>
      </View>
    </View>
  )
}

export default CartItem 