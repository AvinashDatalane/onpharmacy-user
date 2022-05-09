import React from 'react'
import {homePage} from '../data'
import {View,Image,Text,ScrollView} from 'react-native'
import Cart from 'react-native-vector-icons/AntDesign'
import Heart from 'react-native-vector-icons/Foundation'
import { Rating, AirbnbRating } from 'react-native-ratings';


const StoreComponent = () => {
  return (
      
    <View style={{marginTop:20}}>
        <Image source={{uri: homePage.sponseredImages[2]}} style={{width:190,height:190,marginLeft:8}} />
        
        <Text style={{color:'black',marginTop:20}}> Lee pucker design leather</Text>
        <Text style={{color:'black'}}> botinki for hansome designers</Text>
        
        <View style={{flexDirection: 'row',marginTop:20}}>
            <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>$13.95</Text>
            <View style={{backgroundColor:'#5552fc' , width:31, height: 31,borderRadius:4,marginLeft:40}}>
              <Cart name='shoppingcart' color='white' size={23} style={{marginLeft:2,marginTop:5}} />
            </View>

            <View style={{backgroundColor:'white' , width:31, height: 31,borderRadius:4,marginLeft:10}}>
              <Heart name='heart' color='grey' size={23} style={{marginLeft:5,marginTop:5}} />
            </View>

        </View>

        <Rating type='star'
  ratingCount={5}
  selectedColor='black'
  imageSize={12}
  style={{margin:5,marginRight:120,color:'black'}}
/>
    </View>
    
  )
}

export default StoreComponent;