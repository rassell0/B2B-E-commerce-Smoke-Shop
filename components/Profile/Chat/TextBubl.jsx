import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Sent from './Sent'
import Received from './Received'
const TextBubl = ({data}) => {


    const {message,messenger} = data


    

  return messenger ? <Sent message={message}/> : <Received message={message}/>
}

export default TextBubl