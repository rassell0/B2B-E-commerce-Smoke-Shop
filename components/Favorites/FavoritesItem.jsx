import { View, Text, ImageBackground,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import {LinearGradient} from "expo-linear-gradient"
import {Ionicons} from "@expo/vector-icons"
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from '../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductModal from '../Search/ProductModal'


const FavoritesItem = ({data,removeFavorite}) => {

 const {name,uri,reviews} = data
   const [isFav,setIsFav] = useState(true)
let rating;

if(reviews.length === 0){
  rating = "No Ratings"
}


//:data.flavors[0].uri
const [modal,setModal] = useState(false) 

 



async function removeFav(){
    removeFavorite()
  const id = await AsyncStorage.getItem("id")
const userRef = doc(db, "user", id);

  await updateDoc(userRef, {
  favorites: arrayRemove(data.id)
});



// Atomically remove a region from the "regions" array field.



setIsFav(state => !state)
}

function toggleModal(){
    setModal(state => !state)
  
}


  return (
    <TouchableOpacity onPress={toggleModal} style={[tw` rounded-2xl border-2 border-gray-600 h-66 my-4 w-46 items-center `]}>
        {modal && <ProductModal isFav={isFav} stars={4.5} toggleFav={removeFav} data={data} visible={modal} onPress={toggleModal}/>}
        <View style={tw`  rounded-xl`}>
      <ImageBackground source={{uri}} imageStyle={tw`rounded-t-2xl bg-white`} style={tw`w-45 h-40 `}>

      </ImageBackground>
    </View>
    <LinearGradient style={tw`flex-1 justify-around  px-2 w-1/1 rounded-b-2xl `} start={{x:0.1,y:0.3}} end={{x:0.6,y:0.9}} colors={[`#003300`,"#052000"] }>
<Text style={[tw`text-white `,{fontFamily:"Manrope_600SemiBold"}]}>{name}</Text>
<View style={tw`flex-row items-center`}>
    <Ionicons name='star' color={"#cdb414"}/>
    <Text style={[tw`text-white pl-1`,{fontFamily:"Manrope_600SemiBold"}]}>{rating}</Text>
 
</View>
<View style={tw`flex-row justify-between items-center mb-1`}>
<Text style={[tw`text-white `,{fontFamily:"Manrope_600SemiBold"}]}>Log In to see Price</Text>
<TouchableOpacity onPress={removeFavorite} style={[tw`rounded-full py-1 px-1.3 border border-white`]}>
  <Ionicons name={isFav ? "heart" : "heart-outline"} size={20} color={"white"}/>
</TouchableOpacity>
</View>

</LinearGradient> 


    </TouchableOpacity>
     
  )
} 

export default FavoritesItem 