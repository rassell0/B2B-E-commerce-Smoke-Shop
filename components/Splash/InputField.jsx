import { View, Text,TextInput } from 'react-native'
import React ,{useRef, useState}from 'react'
import tw from 'twrnc'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SlBtns from './SLBtns'
import {Ionicons} from "@expo/vector-icons"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { db } from '../firebaseConfig';
import { collection, addDoc,setDoc,doc } from "firebase/firestore"; 
const LoginInputField = ({onPress}) => {
  /** */
    const navigation = useNavigation()

const [userInput,setUserInput] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
})

const [error,setError]= useState(false)

const userRef = collection(db,"user")

async function addUser(uid){
const newUser = await setDoc(doc(db, "user", uid), {
    firstName:userInput.firstName,
    lastName:userInput.lastName,
    email:userInput.email,
    cart:[],
    favorites:[],
    orders:[]
});


}

function updateFirstName(value){
    setUserInput(state =>{
        return {...state,
        firstName:value
        }
    })
   
}
function updateLastName(value){
    setUserInput(state =>{
        return {...state,
        lastName:value
        }
    })
   
}
function updateEmail(value){
    if(error){
        setError(false)
    }
    setUserInput(state =>{
        return {...state,
        email:value
        }
    })
   
}
function updatePassword(value){
    setUserInput(state =>{
        return {...state,
        password:value
        }
    })
 
}

 function signUp(){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userInput.email, userInput.password)
      .then((userCredential) => {
       
        AsyncStorage.setItem("id",userCredential.user.uid.toString())
        const user = userCredential.user;
        addUser(userCredential.user.uid.toString())
       onPress()
    navigation.navigate("main")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        let test = errorCode
      let test2 = test.slice(5)
    let test3 = test2.replaceAll("-", " ")
    setError(test3)
        // ..
      });
   // 
  //  toggleNav()



}


    const passwordRef = useRef()
    const emailRef = useRef()
    const lastnameRef = useRef()
  return (
    <View style={tw``}>
        <TextInput 
            style={[tw`bg-white rounded-md p-4  my-2 border border-gray-600`,{minWidth:"90%",backgroundColor:"#030f06",borderColor:"#47a434",color:"#47a434"}]} 
            returnKeyLabel='next'
            enterKeyHint="next"
            blurOnSubmit={false}
            autoCorrect={false} 
            autoFocus={true}
            placeholder={"First Name"} 
            placeholderTextColor={"gray"}
            onSubmitEditing={()=>{
                lastnameRef.current.focus()
            }}
            onChangeText={updateFirstName}
        />
        <TextInput 
        style={[tw`bg-white rounded-md p-4  my-2 border border-gray-600`,{minWidth:"90%",backgroundColor:"#030f06",borderColor:"#47a434",color:"#47a434"}]} 
        returnKeyLabel='next'
        enterKeyHint="next"
        autoCorrect={false}
        blurOnSubmit={false} 
        ref={lastnameRef} 
        placeholder={"Last Name"} 
        placeholderTextColor={"gray"}
        onSubmitEditing={()=>{
            emailRef.current.focus()
        }}
        onChangeText={updateLastName}
    />
    <TextInput 
    style={[tw`bg-white rounded-md p-4  my-2 border border-gray-600`,{minWidth:"90%",backgroundColor:"#030f06",borderColor:error ? "#eb2222" : "#47a434",color:error ? "#eb2222" : "#47a434"}]} 
    returnKeyLabel='next'
    enterKeyHint="next"
    blurOnSubmit={false} 
    autoCorrect={false}
    ref={emailRef} 
    placeholder={"Email"} 
    placeholderTextColor={"gray"}
    onSubmitEditing={()=>{
        passwordRef.current.focus()
    }}
    onChangeText={updateEmail}
/>
{error && <Text style={[tw` my-1 text-lg text-red-600`,{fontFamily:"Manrope_500Medium"}]}>{error}</Text>}
      <TextInput 
            style={[tw`bg-white rounded-md p-4  my-2 border border-gray-600`,{minWidth:"90%",backgroundColor:"#030f06",borderColor:"#47a434",color:"#47a434"}]} 
            returnKeyLabel="done"
            enterKeyHint="done"
            blurOnSubmit={false} 
            ref={passwordRef} 
            placeholder={"Password"} 
            placeholderTextColor={"gray"}
            onChangeText={updatePassword}
        onSubmitEditing={signUp}
        secureTextEntry={true}
        />
        <SlBtns name={"Sign Up"} onPress={signUp}/>
       
        <Ionicons onPress={onPress} name='close' color={"white"} size={30} style={tw` `}/>
    </View>
  )
}

export default LoginInputField