import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const Header = () => {
    //color:"#f1ebeb"
  return (
    <View style={[tw`flex-row justify-center py-4 items-center`,{backgroundColor:"#0d0101"}]}>
      <Text style={[tw`text-lg`,{color:"#d21d1d"}]}>WARNING: </Text>
      <Text style={[tw`text-lg`,{color:"#f1ebeb"}]}>Flat Rate Shipping inside Florida $10</Text>
    </View>
  )
}

export default Header