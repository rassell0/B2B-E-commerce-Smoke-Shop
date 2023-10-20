import { View, Text, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import LoadingScreen from '../Splash/LoadingScreen'
const EmptyFavoritesScreen = () => {
   
      const [loading,setLoading] = useState(false)
     
  return (
    <View style={[tw`flex-1`,{backgroundColor:"#0c390c"}]}>
     <ImageBackground onLoadStart={()=>setLoading(true)} onLoadEnd={()=>setLoading(false)} source={require("../../images/brokenHeart2.png")} style={tw`flex-1 justify-end`}>
    {loading ? <LoadingScreen/> : <View style={tw` items-center mb-4 mx-4   justify-between`}>
    
     <Text style={[tw`text-white text-lg mx-4`,{fontFamily:"Manrope_500Medium"}]}>Your wishList is empty</Text>
      <Text style={[tw`text-white text-lg text-center`,{fontFamily:"Manrope_200ExtraLight"}]}>Any items items that you save while browsing will be added here, to your favorites</Text>
     
    
  
</View> }
    
     </ImageBackground>
    </View>
  )
}

export default EmptyFavoritesScreen