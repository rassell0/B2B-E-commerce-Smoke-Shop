import { View, Text, ImageBackground ,Image, TouchableOpacity} from 'react-native'
import React, { useState,useEffect } from 'react'
import LoadingScreen from './LoadingScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { doc, getDoc,collection,getDocs,query,where } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { useDispatch,useSelector } from 'react-redux';
import { setFavorites } from '../../redux/favorites';
import { setProfile } from '../../redux/profile';
import { setCart } from '../../redux/cart';
import { setCategories } from '../../redux/category';
const LoadApp = ({navigation}) => {

    const dispatch = useDispatch()

const catRef = collection(db,"Category")

async function getFavorites(data){
   
  let favs = data
  
  const allFavorites = []
  
  for(let i = 0; i < favs.length;i++){
  const prodRef = doc(db, "Products", favs[i]);
  const prodSnap = await getDoc(prodRef);
  const temp = {
      ...prodSnap.data(),
      id:favs[i]
  }
  allFavorites.push(temp)
  }
  dispatch(setFavorites(allFavorites))
  
  }
  
  async function getCat(){
      const cat = []
  const cats =   await getDocs(catRef)
  cats.forEach((data)=>{
      const info = {...data.data(), id:data.id}
     cat.unshift(info)
    
  })
  const prodRef = collection(db,"Products")
  for(let i = 0; i< cat.length; i++){
    const allProducts = []
    const q = query(prodRef, where("category", "==", cat[i].id));
    const querySnapshot = await getDocs(q);
      
    querySnapshot.forEach((doc) => { 
      const data = {
        ...doc.data(),
        id:doc.id
      } 
       allProducts.push(data)
      });
  cat[i].products = allProducts
  }
  dispatch(setCategories(cat))
      } 
  
  
  async function getCart(data){
  
        let cartItems = data
      const allCartItems = []
           
      for(let i = 0; i < cartItems.length;i++){
        const prodRef = doc(db, "Products", cartItems[i].id);
       const prodSnap = await getDoc(prodRef);
        
        const temp = {
           ...prodSnap.data(),
            id:cartItems[i].id,
            quantity:cartItems[i].quantity
       }
       allCartItems.push(temp)
    }
  
    dispatch(setCart(allCartItems))
   } 
  
  useEffect(()=>{
  async function getId(){

    
      getCat()
    const id = await AsyncStorage.getItem("id")
   
      if(!id){
navigation.navigate("splash")
       return
      } else{
         const docRef = doc(db, "user", id);
      
      const docSnap = await getDoc(docRef);
      
      const {firstName,lastName,email} = docSnap.data()
      dispatch(setProfile({firstName,lastName,email,uid:id}))
      if(docSnap.data().cart.length !== 0){
       getCart(docSnap.data().cart)
        }
        if(docSnap.data().favorites.length !== 0){
          getFavorites(docSnap.data().favorites)
          }
      
     navigation.navigate("main")
      }
    
     
  }
  getId()
 // 
  },[]) 
   






  return <LoadingScreen/>
}

export default LoadApp