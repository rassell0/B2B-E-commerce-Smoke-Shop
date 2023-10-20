import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {Ionicons} from "@expo/vector-icons"
const ContinueBtn = () => {
  return (
    <View style={[tw`bg-white rounded-full items-center justify-center p-2`,{backgroundColor:"#f1ebeb"}]} >
      <Ionicons name='chevron-forward-outline' size={30}/>
    </View>
  )
}

export default ContinueBtn