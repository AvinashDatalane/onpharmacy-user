import React from 'react'
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native'
import Heart from 'react-native-vector-icons/Foundation'
import CartComponent from '../Componenets/CartComponent'
import Cart from 'react-native-vector-icons/Entypo'


const CartScreen = () => {
  return (
    <ScrollView>
        <View style={{backgroundColor:'#8FBC8F',width:'100%', height:130,flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold',fontSize:26,marginLeft:20,marginTop:50}}>Your Cart</Text>
            <TouchableOpacity>
            <Heart name='heart' size={24} color='white' style={{marginTop:60,marginLeft:170}} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Cart name='shopping-cart' size={24} color='white' style={{marginTop:60,marginLeft:20}} />
            </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{color:'black',fontWeight:'bold',fontSize:25,margin:15,marginLeft:20}}>Shopping Cart</Text>
        </View>
        
        <CartComponent/>
        <CartComponent/>
        <CartComponent/>
    </ScrollView>
  )
}

export default CartScreen;