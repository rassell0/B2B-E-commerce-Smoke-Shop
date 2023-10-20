import { View, Text,Image, FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {Ionicons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'
const SideScroll = ({name}) => {

const navigation = useNavigation()

   const data = [
    {uri:"https://i0.wp.com/totalqualitydistribution.com/wp-content/uploads/2023/03/download-1.png?w=800&ssl=1",name:"Disposible Vapes"},
    {uri:"https://i0.wp.com/totalqualitydistribution.com/wp-content/uploads/2023/03/500mg-1-1.jpg?w=800&ssl=1",name:"Edibles"},
    {uri:"https://i0.wp.com/totalqualitydistribution.com/wp-content/uploads/2023/03/TKO_D8_VapeCart_1ML_GB_D.jpg?fit=713%2C655&ssl=1",name:"Smokeable"},
    {uri:"https://i0.wp.com/totalqualitydistribution.com/wp-content/uploads/2023/02/download-1.png?fit=800%2C800&ssl=1",name:"Tinctures"},
    {uri:"https://i0.wp.com/totalqualitydistribution.com/wp-content/uploads/2023/02/Untitled-1-2.png?fit=800%2C800&ssl=1",name:"Topicals"}
]

const data2 = [
    {path:require("../../images/vap.png"),name:"Disposible Vapes"},
    {path:require("../../images/edibles.png"),name:"Edibles"},
    {path:require("../../images/smok.png"),name:"Smokeable"},
    {path:require("../../images/tinc.png"),name:"Tinctures"},
    {path:require("../../images/idktbh.png"),name:"Topicals"}
]

function render({item}){
const {name,path} = item
    return <View>
       
    <Image style={tw`h-40 w-35 border border-gray-600 mr-4`} source={path}/>
  
   <Text style={[tw`text-white`,{fontFamily:"Manrope_500Medium"}]}>{name}</Text> 
          </View>
}


  return (
    <View style={tw` p-4 my-4`}>
        <View style={tw`flex-row justify-between items-center `}>
        <Text style={[tw`text-white`,{fontFamily:"Manrope_500Medium"}]}>Our Collections</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("search")}} style={tw`flex-row items-center`}>
          <Text style={[tw`text-white`,{fontFamily:"Manrope_500Medium"}]}>View All</Text>  
          <Ionicons name='chevron-forward-outline' color={"white"} size={20}/>
        </TouchableOpacity>
        </View>
      <View style={tw`mt-4`}>
        <FlatList data={data2} renderItem={render} horizontal/>
      </View>
    </View>
  )
}

export default SideScroll