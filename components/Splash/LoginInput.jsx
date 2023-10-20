import { View, Text,TextInput } from 'react-native'
import React ,{useEffect, useRef, useState}from 'react'
import tw from 'twrnc'
import SlBtns from './SLBtns'
//import {useNavigation} from "@react-navigation/native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Ionicons} from "@expo/vector-icons"
import { app } from '../firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
const LoginInputField = ({onPress}) => {
const navigation = useNavigation()
  const auth = getAuth();
const [userInput,setUserInput] = useState({
    
    email:"",
    password:""
})



const [error,setError]= useState({
    type:null,
    message:null
})



function updateEmail(value){
    
    if(error.type ==="email"){
        setError({
            type:null,
            message:null
        })
    }
    setUserInput(state =>{
        return {...state,
        email:value
        }
    })
   
}
 const passwordRef = useRef()

function updatePassword(value){
    if(error.type === "password"){
        setError({
            type:null,
            message:null
        })
    }
    setUserInput(state =>{
        return {...state,
        password:value
        }
    })
  
}

function completeLogin(){
 
signInWithEmailAndPassword(auth, userInput.email, userInput.password)
  .then((userCredential) => {
  
   const user = userCredential.user.uid;
   AsyncStorage.setItem("id",user.toString())
    onPress()
  navigation.navigate("main")
    // ...
  })
  .catch((error) => {
  console.log(error)
    const errorCode = error.code;
    const errorMessage = error.message;
    let emailErr = errorCode.includes("email")
    let emailErr2 = errorCode.includes("user")
    let passwordErr =errorCode.includes("password")
    let test = errorCode
    let test2 = test.slice(5)
  let test3 = test2.replaceAll("-", " ")
    if(emailErr || emailErr2){
    
        setError({
            type:"email",
            message:test3
    }) 
    }else if(passwordErr){
        setError({
            type:"password",
            message:test3
    }) 
    }
  });
 


 
 // 
 
  
   
  
  }
   
    const emailRef = useRef()
   


  return (
    <View style={tw``}>
       
        
    <TextInput 
    style={[tw`bg-white rounded-md p-4 mx-4 my-2 border `,{minWidth:"90%",backgroundColor:"#030f06",borderColor:error.type === "email" ? "#eb2222" : "#47a434",color:error.type === "email" ? "#eb2222" : "#47a434"}]} 
    returnKeyLabel='next'
    enterKeyHint="next"
    blurOnSubmit={false} 
    ref={emailRef} 
    autoCorrect={false}
    placeholder={"Email"} 
    placeholderTextColor={"#47a434"}
    onSubmitEditing={()=>{
        passwordRef.current.focus()
    }}
    autoFocus={true}
    onChangeText={updateEmail}
/>
{error.type === "email" && <Text style={[tw`mx-4 my-1 text-lg text-red-600`,{fontFamily:"Manrope_500Medium"}]}>{error.message}</Text>}
      <TextInput 
            style={[tw`bg-white rounded-md p-4 mx-4 my-2 border border-gray-600`,{minWidth:"90%",backgroundColor:"#030f06",borderColor:error.type === "password" ? "#eb2222" : "#47a434",color:error.type === "password" ? "#eb2222" : "#47a434"}]} 
            returnKeyLabel="done"
            enterKeyHint="done"
            blurOnSubmit={false} 
            ref={passwordRef} 
            placeholder={"Password"} 
            placeholderTextColor={"#47a434"}
            onChangeText={updatePassword}
            secureTextEntry={true}
        />
        {error.type === "password" && <Text style={[tw`mx-4 my-1 text-lg text-red-600`,{fontFamily:"Manrope_500Medium"}]}>{error.message}</Text>} 
        <SlBtns onPress={completeLogin} name={"Log In"}/>

        <Ionicons onPress={onPress}  name='close' style={tw`mt-6 ml-4`} color={"white"} size={30} />
    </View>
  )
}

export default LoginInputField