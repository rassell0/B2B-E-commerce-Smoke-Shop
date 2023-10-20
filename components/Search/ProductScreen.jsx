import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'

import ProductPreview from './ProductPreview';
import LoadingScreen from '../Splash/LoadingScreen';
const ProductScreen = ({route}) => {
    const [products,setProducts] = useState(null)
const {params} = route
  

 
 

function render({item}){
    
return <ProductPreview data={item}/>
}
 
 
  return (
    <View style={[tw`flex-1`,{backgroundColor:"#030d03"}]}>
<FlatList data={params.products} numColumns={2} renderItem={render}/> 
    </View>
  ) 
}

export default ProductScreen