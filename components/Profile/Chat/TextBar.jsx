import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const TextBar = ({onPress,sendMessage,value}) => {
  return (
    <View style={tw` flex-row mb-2`}>
      <TextInput placeholder='Message' placeholderTextColor={"#d9d9d9"} value={value}  onChangeText={(val)=>{onPress(val)}} style={[tw`flex-1 border items-center border-gray-600 rounded-3xl pl-4 text-lg mx-2`,{color:"#d9d9d9"}]}/>
      <TouchableOpacity onPress={sendMessage} style={tw`p-4 rounded-full border border-gray-600`}>
<Text style={[tw`text-lg text-center`,{fontFamily:"Manrope_800ExtraBold",color:"#d9d9d9"}]}>Send</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TextBar