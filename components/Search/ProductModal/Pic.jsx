import { View, Text,ImageBackground ,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import tw from 'twrnc'
import {Ionicons} from "@expo/vector-icons"
const Pic = ({uri,toggleFav,isFav}) => {




  return (
    <View style={tw` bg-white h-75 w-1/1 rounded-2xl  `}>
    <ImageBackground source={{uri}} imageStyle={tw`rounded-2xl`} style={tw`flex-1 justify-end items-end pr-1 pb-1`}>
    <TouchableOpacity onPress={toggleFav} style={[tw`rounded-full h-10 w-10 items-center justify-center border border-black`]}>
    <Ionicons name={isFav ? "heart" : "heart-outline"} size={25} color={"black"}/>
    </TouchableOpacity>
    </ImageBackground>
    </View>
    
  )
}

export default Pic