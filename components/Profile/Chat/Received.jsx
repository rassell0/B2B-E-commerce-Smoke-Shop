import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const Received = ({message}) => {
//"#434642"
  return (
    <View style={[tw` my-1  rounded-2xl`]}>
        <View style={[tw`text-xl px-4  border  rounded-2xl`,{backgroundColor:"#434642",color:"#d9d9d9",borderColor:"#d9d9d9",maxWidth:"60%",minWidth:"10%"}]}>
        <Text style={[tw`text-xl`,{color:"#d9d9d9"}]}>{message}</Text>
        </View>
    </View>
  )
}

export default Received