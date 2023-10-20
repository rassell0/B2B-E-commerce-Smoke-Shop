import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const Sent = ({message}) => {
  return (
    <View style={[tw` my-1 items-end rounded-2xl`]}>
        <View style={[tw`text-xl px-4 w-3/5 border  rounded-2xl`,{backgroundColor:"#0d2605",color:"#d9d9d9",borderColor:"#d9d9d9"}]}>
        <Text style={[tw`text-xl`,{color:"#d9d9d9"}]}>{message}</Text>
        </View>
    </View>
  )
}

export default Sent