import { View, Text,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import {Ionicons} from "@expo/vector-icons"
const Reviews = () => {


const [rating,setRating] = useState(0)
//console.log(rating)
const idk = [1,2,3,4,5]


function update(val){
    setRating(val)
}


const ratings = idk.map((val)=>{
  
    return <TouchableOpacity key={val} style={tw`mx-0.5 `} onPress={()=>update(val)}>
        <Ionicons  size={20} color={"orange"} name={val <= rating ? "star" : "star-outline"}/>
        </TouchableOpacity> 
})

  return (
    <View style={tw`mt-4 w-1/1 mb-4`}>
    <Text style={[tw`text-white text-base text-center`,{fontFamily:"Manrope_600SemiBold"}]}>BE THE FIRST TO REVIEW “FUNKY REPUBLIC TI7000 5CT”</Text>
   <View style={tw`flex-row justify-between my-4 `}>
       <TextInput placeholder='Name' placeholderTextColor={"#d9d9d9"} style={[tw`  border rounded-md p-3 border-gray-600  w-4.5/10`,{backgroundColor:"#081c08"}]}/>
    <TextInput placeholder='Email' placeholderTextColor={"#d9d9d9"} style={[tw` border rounded-md p-3 border-gray-600  w-4.5/10`,{backgroundColor:"#081c08",color:"#d9d9d9"}]}/>
   </View>
   <View style={tw`flex-row`}>
<Text style={[tw`text-white text-base text-center`,{fontFamily:"Manrope_600SemiBold"}]}>Rating:</Text>
{ratings}
   </View>
    <TextInput placeholder='Your Review' placeholderTextColor={"#d9d9d9"} multiline={true} style={[tw` h-20 mt-4 border rounded-md p-3 border-gray-600  `,{backgroundColor:"#081c08"}]}/>
    </View>
  )
}

export default Reviews