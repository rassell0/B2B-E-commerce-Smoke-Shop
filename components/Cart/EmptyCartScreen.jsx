import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import GoToShopBtn from './GoToShopBtn'
import { useNavigation } from '@react-navigation/native';

const EmptyCartScreen = () => {
  const navigation = useNavigation()
   function goToShop(){
navigation.navigate("Search")
   }   

  return (
    <View style={[tw`bg-blue-200 h-1/1 w-1/1`,{backgroundColor:"black"}]}>
      <ImageBackground source={require("../../images/emptyCart.png")} resizeMode='cover' style={tw`flex-1 justify-end`} >
<View style={tw` items-center`}>
    <Text style={[tw`text-white text-xl`,{fontFamily:"Manrope_200ExtraLight"}]}>Your cart is empty</Text>
    <GoToShopBtn onPress={goToShop}/>
</View>
      </ImageBackground>
    </View>
  )
}

export default EmptyCartScreen