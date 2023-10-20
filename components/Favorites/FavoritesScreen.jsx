import { View, Text,FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const FavoritesScreen = () => {
  return (
    <View style={tw`flex-1`}>
      <FlatList data={favorites} renderItem={render}/>
    </View>
  )
}

export default FavoritesScreen