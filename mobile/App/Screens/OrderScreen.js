import React from 'react'
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native'
import Heart from 'react-native-vector-icons/Foundation'
import Cart from 'react-native-vector-icons/Entypo'
import OrderComponent from '../Componenets/OrderComponent'
import WishlistScreen from '../Screens/WishlistScreen'
import CartScreen from '../Screens/CartScreen'

const OrderScreen = (props) => {
  return (
    <ScrollView>
        <View style={{backgroundColor:'#8FBC8F',width:'100%', height:130,flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold',fontSize:26,marginLeft:20,marginTop:50}}>Order History</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('WishlistScreen')}>
            <Heart name='heart' size={24} color='white' style={{marginTop:60,marginLeft:130}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('CartScreen')}>
            <Cart name='shopping-cart' size={24} color='white' style={{marginTop:60,marginLeft:20}} />
            </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{color:'black',fontWeight:'bold',fontSize:25,margin:15,marginLeft:20}}>Transactions</Text>
          <Text style={{color:'#8FBC8F',fontWeight:'bold',fontSize:15,margin:25,marginLeft:20}}>(March 2022)</Text>
        </View>
        
        <OrderComponent/>
        <OrderComponent/>
        <OrderComponent/>


    </ScrollView>
  )
}

export default OrderScreen;