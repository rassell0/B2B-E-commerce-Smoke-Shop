import { View, Text, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import PromotionBtn from './PromotionBtn'
import SideScroll from './SideScroll'
import Header from './Header'
import Info from './Info'

const HomeScreen = () => {


const P1 ={path:require("../../images/status.png"),header:"Join The Trend",subHeader:"View Products"}
const P2 ={path:require("../../images/fun.png"),header:"Top Rated",subHeader:"View Our Best Products"}



const data = [<Header/>,<PromotionBtn data={P1} />,<SideScroll/>,<PromotionBtn data={P2}/>,<Info/>]

function render({item}){
    return item
}

  return (
    <View style={[tw`flex-1`,{backgroundColor:"#030f06"}]}>
      <FlatList data={data} renderItem={render}/>
    </View>
  )
}

export default HomeScreen