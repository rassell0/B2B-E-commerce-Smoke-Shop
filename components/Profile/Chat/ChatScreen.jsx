import { View, Text, TextInput, KeyboardAvoidingView, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import TextBar from './TextBar'
import { collection, addDoc,onSnapshot,serverTimestamp, query , where, orderBy} from "firebase/firestore"; 
import { db } from "../../firebaseConfig"
import { useSelector } from 'react-redux'
import TextBubl from './TextBubl';
const ChatScreen = () => {
  const user = useSelector(state => state.profile.user.firstName)
    const [newMessage,setNewMessage] = useState("")
const [allMessages,setAllMessages] = useState([])
const messageRef = collection(db, "messages")

useEffect(()=>{
const queryMessages = query(messageRef,where("room","==","room2"),orderBy("time"))
const unsubscribe = onSnapshot(queryMessages,(snap)=>{
  const messages = []
snap.forEach((doc)=>{
  messages.push({...doc.data(),id:doc.id})
})

setAllMessages(messages)
})

return () => unsubscribe()
},[])

function chat(val){
setNewMessage(val) 

}

async function sendMessage(){
  if(newMessage === ""){
    return
  }
  setNewMessage("")
await addDoc(messageRef,{
  message:newMessage,
  time:serverTimestamp(),
  user,
  room:"room2"   //user.uid
})
  
  
}

function render({item}){

const data = {...item,
messenger:item.user === user ? true : false
}

return <TextBubl data={data}/>
}


  return (
    
      <View style={[tw`flex-1 justify-end`,{backgroundColor:"#030f06"}]}>
    <FlatList data={allMessages} renderItem={render}/>
    <TextBar value={newMessage} sendMessage={sendMessage} onPress={chat}/>
  </View>

   
    
  )
}

export default ChatScreen