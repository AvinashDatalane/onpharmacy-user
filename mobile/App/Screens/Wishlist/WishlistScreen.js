import React from 'react'
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native'
import Heart from 'react-native-vector-icons/Foundation'
import WishlistComponent from '../../Componenets/WishlistComponent'
import styles from './WishlistStyles'

const WishlistScreen = () => {
  return (
    <ScrollView>
        <View style={styles.bigView}>
            <Text style={styles.text1}>Your Wishlist</Text>
            <TouchableOpacity>
            <Heart name='heart' size={24} color='white' style={{marginTop:60,marginLeft:130}} />
            </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text2}>Wish List</Text>
        </View>
        
        <WishlistComponent/>
        <WishlistComponent/>
        <WishlistComponent/>

    </ScrollView>
  )
}

export default WishlistScreen;

