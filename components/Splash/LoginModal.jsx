

import { View, Text,Modal, ImageBackground,Image, TextInput, TouchableOpacity, } from 'react-native'
import React,{useRef,useState} from 'react'
import tw from 'twrnc'


import { LinearGradient } from 'expo-linear-gradient'

import LoginInputField from './LoginInput'


const LogInModal = ({onPress,toggleNav}) => {
 
    
  return (
    <Modal animationType="fade"  >
   <LinearGradient style={[tw` h-1/1 w-1/1 `]} colors={["#14300f","#030f06"]}>

   
    
   <View style={tw`h-70  mt-4 items-center justify-between`}>


              <View style={tw`mt-25`}>
        <LoginInputField  onPress={onPress}/>
              </View>
      
      

       </View> 
        
             

  
  </LinearGradient> 
            
            


            
             
        
     
    </Modal>
  )
}

export default LogInModal