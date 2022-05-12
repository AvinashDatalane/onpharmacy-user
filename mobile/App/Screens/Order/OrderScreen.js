import React from 'react'
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native'
import Heart from 'react-native-vector-icons/Foundation'
import Cart from 'react-native-vector-icons/Entypo'
import OrderComponent from '../../Componenets/OrderComponent'
// import WishlistScreen from '../Wishlist/WishlistScreen'
// import CartScreen from '../Cart/CartScreen'
import styles from './OrderStyles'
import WishlistScreen from '../Wishlist/WishlistScreen'


const OrderScreen = (props) => {
  return (
    <ScrollView>
        <View style={styles.bigView}>
            <Text style={styles.text1}>Order History</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('WishlistScreen')}>
            <Heart name='heart' size={24} color='white' style={{marginTop:60,marginLeft:130}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('CartScreen')}>
            <Cart name='shopping-cart' size={24} color='white' style={{marginTop:60,marginLeft:20}} />
            </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text2}>Transactions</Text>
          <Text style={styles.text3}>(March 2022)</Text>
        </View>
        
        <OrderComponent/>
        <OrderComponent/>
        <OrderComponent/>


    </ScrollView>
  )
}

export default OrderScreen;

