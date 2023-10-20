import { View, } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import LoadingScreen from '../Splash/LoadingScreen';
import EmptyCartScreen from './EmptyCartScreen';
import CartScreen from './CartScreen';
import { useSelector } from 'react-redux';
const CartContainer = () => {
  
const cart = useSelector(state => state.cart.cart)
  return (
    <View style={[tw`flex-1`,{backgroundColor:"#030f06"}]}>
 
     {cart.length === 0 ? <EmptyCartScreen/> :  <CartScreen cart={cart} />}

    </View>
  )
}

export default CartContainer