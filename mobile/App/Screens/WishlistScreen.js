import React from 'react'
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native'
import Heart from 'react-native-vector-icons/Foundation'
import WishlistComponent from '../Componenets/WishlistComponent'

const WishlistScreen = () => {
  return (
    <ScrollView>
        <View style={{backgroundColor:'#8FBC8F',width:'100%', height:130,flexDirection: 'row'}}>
            <Text style={{color:'white', fontWeight:'bold',fontSize:26,marginLeft:20,marginTop:50}}>Your Wishlist</Text>
            <TouchableOpacity>
            <Heart name='heart' size={24} color='white' style={{marginTop:60,marginLeft:130}} />
            </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{color:'black',fontWeight:'bold',fontSize:25,margin:15,marginLeft:20}}>Wish List</Text>
        </View>
        
        <WishlistComponent/>
        <WishlistComponent/>
        <WishlistComponent/>

    </ScrollView>
  )
}

export default WishlistScreen;