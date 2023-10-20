import { View, Text, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import SettingBtns from './SettingBtns'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
const ProfileScreen = ({navigation}) => {
const user = useSelector(state => state.profile.user)
const btns = [{name:"My Orders",icon:"cube-outline"},{name:"Browsing History",icon:"arrow-undo-outline"},{name:"Request For Quotation",icon:"chatbox-outline"},{name:"Inquires",icon:"mail-outline"}]



function chat(){
    navigation.navigate("chat")
}

function render({item}){
  return <SettingBtns onPress={chat} data={item}/>
}



  return (
    <View style={[tw`flex-1`,{backgroundColor:"#030f06"}]}>
      <Text style={[tw`text-lg text-white text-center`,{fontFamily:"Manrope_800ExtraBold"}]}>Welcome {user.firstName}</Text>
      <FlatList data={btns} renderItem={render}/>
    </View>
  )
}

export default ProfileScreen