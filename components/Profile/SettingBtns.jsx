import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {Ionicons} from "@expo/vector-icons"

const SettingBtns = ({onPress,data}) => {
  return (
    <TouchableOpacity onPress={onPress} style={tw`border-t border-b border-gray-600 flex-row items-center p-4`}>
        <Ionicons name={data.icon} color={"#f1ebeb"} size={20}/>
    <Text style={[tw`text-base ml-4`,{fontFamily:"Manrope_500Medium",color:"#f1ebeb"}]}>{data.name}</Text>
    </TouchableOpacity>
  )
}

export default SettingBtns