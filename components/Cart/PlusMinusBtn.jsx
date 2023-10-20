import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {Ionicons} from "@expo/vector-icons"
const PlusMinusBtn = ({type}) => {
  //#0c390c
  return (
    <View style={[tw` items-center justify-center rounded-full border border-gray-400 p-1.5`,{backgroundColor:"#007300"}]}>
     <Ionicons name={type} color={"lightgray"} size={20}/>
    </View>
  )
}

export default PlusMinusBtn