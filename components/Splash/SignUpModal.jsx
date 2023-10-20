import { View, Text,Modal, ImageBackground,Image, TextInput, } from 'react-native'
import React,{useRef,useState} from 'react'
import tw from 'twrnc'
import InputField from './InputField'

import { LinearGradient } from 'expo-linear-gradient'

const SignUpModal = ({onPress}) => {
  
    
    

      

  return (
    <Modal animationType='fade'  >
   <View style={tw` h-1/1 w-1/1`}>

   <LinearGradient style={[tw` h-1/1 w-1/1 `]} colors={["#14300f","#030f06"]}>

    
    <View style={tw`h-70  mt-4 items-center justify-between`}>


               
      <View style={tw`mt-20`}>
 <InputField  onPress={onPress}  />
 
      </View>
       

       </View> 
        
             

 </LinearGradient>
  </View> 
            
            


            
             
        
     
    </Modal>
  )
}

export default SignUpModal