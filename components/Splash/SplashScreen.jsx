import { View, Text, ImageBackground ,Image, TouchableOpacity} from 'react-native'
import React, { useState,useEffect } from 'react'
import tw from 'twrnc'
import SplashBtns from './SplashBtns'
import SignUpModal from './SignUpModal';
import LogInModal from './LoginModal';


const SplashScreen = ({navigation}) => {

const [modals,setModals] = useState({
  signUpModal:false,
  logInModal:false,
})




function toggleSignUp(){
  setModals(state =>{
    return {...state,
    signUpModal: !state.signUpModal
    }
  })
}


function toggleLogIn(){
  
  setModals(state =>{
    return {...state, 
    logInModal: !state.logInModal
    }
  })

}
  



  return (
    <View style={tw`h-1/1 w-1/1`}>
       {modals.logInModal && <LogInModal   onPress={toggleLogIn}/>} 
{modals.signUpModal && <SignUpModal  onPress={toggleSignUp}/>}
      <ImageBackground style={tw`flex-1 justify-center items-center`} source={require("../../images/splashbg.png")}> 
      <View style={tw`flex-4 justify-center items-center  `}>
<View style={[tw` p-4 rounded-full border border-gray-600`,{backgroundColor:"#d9d9d9"}]}>
     <Image style={tw`w-80 h-30`} source={require("../../images/logo.png.webp")}/>
</View>
   
  </View>

<View style={tw` flex-1.2  items-center  `}>
<View style={tw`flex-row mb-4`}>
<SplashBtns onPress={toggleLogIn}  name={"Log In"}/>
<SplashBtns onPress={toggleSignUp} name={"Sign Up"}/>
</View>

</View>
  
    
      

      </ImageBackground>
    </View>
  )
}

export default SplashScreen