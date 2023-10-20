import { View, Text, FlatList,Alert } from 'react-native'
import React, { useEffect,useState } from 'react'
import tw from 'twrnc'

import CartItem from './CartItem'
import BigBtn from '../Buttons/BigButton'
import CheckoutBtn from '../Buttons/CheckoutBtn'



const CartScreen = ({cart}) => {



  const [total,setTotal] = useState(40)


  

    
  
 
  



 
  
function render({item}){
    return <CartItem data={item}/>
}

  return (
    <View style={[tw`h-1/1 w-1/1 items-center  `,{backgroundColor:"#030f06"}]}>
   
 <FlatList 
 data={cart} 
 renderItem={render} 
 ItemSeparatorComponent={()=><View style={tw`my-2`}></View>}
 ListHeaderComponent={()=><View style={tw`my-2`}></View>}
 ListFooterComponent={()=><View style={tw`my-2`}></View>}
 />
      
    <View style={[tw`h-2.2/10 w-1/1 rounded-t-3xl p-4 justify-between border border-gray-600`,{backgroundColor:"#0c390c"}]}>
      <View style={tw` flex-row justify-between`}>
        <Text style={[tw`text-white text-lg`,{fontFamily:"Manrope_600SemiBold"}]}>Subtotal</Text>
      <Text style={[tw`text-white text-lg`,{fontFamily:"Manrope_600SemiBold"}]}>${total}</Text>
      </View>
     
  <CheckoutBtn/>
    </View>
    </View>
  )
}

export default CartScreen