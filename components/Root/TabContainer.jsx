import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons"
import EmptyCartScreen from '../Cart/EmptyCartScreen';
import AllCategoriesScreen from '../Search/AllCategoriesScreen';
import SearchContainer from '../Search/SearchContainer';
import CartScreen from '../Cart/CartScreen';
import EmptyFavoritesScreen from '../Favorites/EmptyFavoritesScreen';
import FavoritesContainer from '../Favorites/FavoritesContainer';
import CartContainer from '../Cart/CartContainer';
import HomeScreen from '../Home/HomeScreen';
import ProfileScreen from '../Profile/ProfileScreen';
import ProfileContainer from '../Profile/ProfileContainer';
import { useSelector } from 'react-redux';


const TabContainer = () => {

  const badge = useSelector(state => state.cart.cart)

//const cartLength = useSelector(state => state.slices.account.cart.length)
let cartLength = 4
const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle:{backgroundColor:"#081c08"},
      headerStyle:[{
        backgroundColor:"#081c08",
        
      }],
      
      headerTintColor:"white",
      headerTitleStyle:{
        fontFamily:"Manrope_500Medium"
      },
    }}>
     <Tab.Screen name='Home' options={{
          tabBarIcon:({color,focused,size})=>{
              //#0f630f  #20da20
            return <Ionicons name='home-outline' size={30} color={focused ? "#20da20" : "#899089"}/>
          },
          tabBarShowLabel:false,
        
        }} component={HomeScreen}/>
        <Tab.Screen name='search' options={{
          tabBarIcon:({color,focused,size})=>{
              //#0f630f  #20da20
            return <Ionicons name='search-outline' size={30} color={focused ? "#20da20" : "#899089"}/>
          },
          tabBarShowLabel:false,
          headerShown:false

        }} component={SearchContainer}/>
        <Tab.Screen name='Cart' options={{
          tabBarIcon:({color,focused,size})=>{
              //#0f630f  #20da20
            return <Ionicons name='cart-outline' size={30} color={focused ? "#20da20" : "#899089"}/>
          },
          tabBarShowLabel:false,
          tabBarBadge:badge.length > 0 ? badge.length : null
        }} component={CartContainer}/>
        <Tab.Screen name='Favorites' options={{
          tabBarIcon:({color,focused,size})=>{
              //#0f630f  #20da20
            return <Ionicons name='heart-outline' size={30} color={focused ? "#20da20" : "#899089"}/>
          },
          tabBarShowLabel:false
        }} component={FavoritesContainer}/>
        <Tab.Screen name='Profile'  options={{
          tabBarIcon:({color,focused,size})=>{
              //#0f630f  #20da20
            return <Ionicons name='person-outline' size={30} color={focused ? "#20da20" : "#899089"}/>
          },
          tabBarShowLabel:false,
          headerShown:false
        }} component={ProfileContainer}/>
    </Tab.Navigator>
  )
}

export default TabContainer