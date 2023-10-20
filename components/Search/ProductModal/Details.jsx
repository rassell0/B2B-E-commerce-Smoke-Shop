import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SelectList } from 'react-native-dropdown-select-list'
import {Ionicons} from "@expo/vector-icons"
const Details = ({setQuantity,name,reviews}) => {

    const listData = [1,2,3,4,5,6,7,8,9,10]
    
  return (
    <View style={tw`w-1/1 `}>
      <View style={tw` flex-row  my-4 items-center justify-between`}>
         <Text style={[tw`text-white text-base`,{fontFamily:"Manrope_800ExtraBold"}]}>{name}</Text>
         <Text style={[tw`text-white text-lg`,{fontFamily:"Manrope_600SemiBold"}]}>Log In For Price</Text>
         </View>
      

         <View style={tw`flex-row mt-2 mb-4 justify-between`}>
         <Text style={[tw`text-white text-lg`,{fontFamily:"Manrope_600SemiBold"}]}>No Ratings </Text>
         <Text style={[tw`text-white text-base`,{fontFamily:"Manrope_600SemiBold"}]}>{reviews.length} Ratings</Text>
         </View>
         
         <SelectList  
         arrowicon={<Ionicons name='chevron-down' color={"white"} size={20}/>} 
         boxStyles={{backgroundColor:"#081c08",width:"100%"}} 
         inputStyles={{color:"white",fontFamily:"Manrope_800ExtraBold"}} 
         dropdownStyles={{backgroundColor:"#081c08"}} 
         dropdownTextStyles={{color:"#d9d9d9",fontFamily:"Manrope_800ExtraBold"}} 
         data={listData} 
         placeholder='Select a quantity' 
         setSelected={(value)=>{setQuantity(value)}} 
         save="value" 
         search={false}
         />
      
    </View>
  )
}

export default Details