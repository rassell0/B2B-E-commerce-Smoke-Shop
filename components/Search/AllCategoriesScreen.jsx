import { View, FlatList } from 'react-native'
import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native';
import CategoryPreview from './CategoryPreview';
import LoadingScreen from '../Splash/LoadingScreen';
import { useSelector } from 'react-redux';
const AllCategoriesScreen = () => {
const [allCategories,setAllCategories] = useState(null)
const categories = useSelector(state => state.category.categories)

   const navigation = useNavigation()

   const categoryPics = [require("../../images/vaporizors.png"),require("../../images/gummies.png"),require("../../images/rolling.png"),require("../../images/mars.png"),require("../../images/assesories.png"),require("../../images/eliquid.png"),require("../../images/vape.png"),require("../../images/ointment.png"),require("../../images/bong.png")]

 function render({item,index}){
    const {name,id,products} = item 
   
  function viewCategory(){
    navigation.navigate(name,{
        products
    })
  }
    return <CategoryPreview onPress={viewCategory} name={name} pic={categoryPics[index]} />
 }

  return (
    <View style={{justifyContent:"center" , alignItems:"center",flex:1,backgroundColor:"#030d03"}}>
 <FlatList data={categories} numColumns={2} columnWrapperStyle={{justifyContent:"space-between",width:"99.1%"}} renderItem={render}/> 
    </View>
  )
}

export default AllCategoriesScreen 