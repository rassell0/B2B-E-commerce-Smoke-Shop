import { View, Text, FlatList } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import tw from 'twrnc'
import EmptyFavortiesScreen from "./EmptyFavoritesScreen"
import FavoritesItem from './FavoritesItem';
import LoadingScreen from '../Splash/LoadingScreen';
import { useSelector } from 'react-redux';

const FavoritesContainer = () => {

const favorites = useSelector(state => state.favorites.favorites)




function render({item}){

function removeFavorite(){
const temp = favorites
for(let i= 0; i < temp.length; i++){
    if(temp[i].id === item.id){
        temp.splice(i,1)
        setFavorites(temp)
        return
    }
}
}

return <FavoritesItem removeFavorite={removeFavorite} data={item}/>
}





  return (
    <View style={[tw`flex-1`,{backgroundColor:"#030d03"}]}>
     
     {favorites.length === 0 ? <EmptyFavortiesScreen/> : <FlatList data={favorites} numColumns={2} renderItem={render}/>}
     
    </View>
  )
}

export default FavoritesContainer