import { View, Text,Modal, TouchableOpacity, ImageBackground, Image, ScrollView, Alert, FlatList,Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import {Ionicons} from "@expo/vector-icons"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from "@react-navigation/native"
import Pic from './ProductModal/Pic'
import Details from './ProductModal/Details'
import Reviews from './ProductModal/Reviews'
import Footer from './ProductModal/Footer'
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cart';

const ProductModal = ({onPress,data ,toggleFav,isFav}) => {
    const {name,reviews,uri} = data

    const navigation = useNavigation()
    const idk = useSelector(state => state.cart)
const [rating,setRating] = useState(0)
 
  
const dispatch = useDispatch()


   
const listData = [1,2,3,4,5,6,7,8,9,10]
const [quantity,setQuantity] = useState(null)


for(let i = 0; i < reviews.length ; i++){

}


async function add2Cart(){

  




if(!quantity){
    Alert.alert("Oops","Please select a quantity")
}else{
  

dispatch(addToCart({...data,quantity}))
    Alert.alert("Sweet","This item was successfully added to your cart",[{
        text: 'Continue Shopping',
       onPress:()=>{onPress()},
        style: 'cancel',
      },{
        text: 'Checkout',
        onPress:()=>{
           // onPress()
            navigation.goBack()
            navigation.navigate("Cart")
        
        },
        style: 'cancel',
      },])

      const id = await AsyncStorage.getItem("id")
      const userRef = doc(db, "user", id);
      await updateDoc(userRef, {
        cart: arrayUnion({id:data.id,quantity})
      });

}
}


const modal = [<Pic uri={uri} isFav={isFav} toggleFav={toggleFav}/>, <Details name={name} setQuantity={setQuantity} reviews={reviews}/>,<Reviews name={name}/>]
    

  

function render({item}){
    return item
}


  return (  
        <Modal animationType="fade"  >
             
          
             <View style={[tw`flex-1 items-center px-10 pt-25  `,{backgroundColor:"#030d03"}]}>
             
             <TouchableOpacity onPress={onPress} style={[tw`border  border-gray-400 rounded-full  items-center justify-center absolute left-4 top-14`,{width:35,height:35}]} >
         <Ionicons name='close-outline' size={30} color={"white"} style={tw``}/> 
         </TouchableOpacity>
         
         <View style={tw`flex-1`}>
          <FlatList data={modal} showsVerticalScrollIndicator={false} renderItem={render}/>
         </View>
       
        
        <Footer add2Cart={add2Cart}/>
       
       
         </View>
 </Modal>
      

    
  

        
  
  )
}

export default ProductModal