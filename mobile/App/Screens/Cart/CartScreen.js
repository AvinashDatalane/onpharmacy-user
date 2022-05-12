import React from 'react'
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native'
import Heart from 'react-native-vector-icons/Foundation'
import CartComponent from '../../Componenets/CartComponent'
import Cart from 'react-native-vector-icons/Entypo'
import styles from './CartStyles'

const CartScreen = () => {
  return (
    <ScrollView>
        <View style={styles.views}>
            <Text style={styles.text1}>Your Cart</Text>
            <TouchableOpacity>
            <Heart name='heart' size={24} color='white' style={{marginTop:60,marginLeft:170}} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Cart name='shopping-cart' size={24} color='white' style={{marginTop:60,marginLeft:20}} />
            </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text2}>Shopping Cart</Text>
        </View>
        
        <CartComponent/>
        <CartComponent/>
        <CartComponent/>
    </ScrollView>
  )
}

export default CartScreen;

