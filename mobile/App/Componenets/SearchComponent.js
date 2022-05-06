import React from 'react'
import {View,Text,Image,Pressable,ScrollView,StyleSheet} from 'react-native'
import {homePage} from '../data'
import { Rating, AirbnbRating } from 'react-native-ratings';

const SearchComponent = () => {
  return (
    
      <View> 

          <View style={{flexDirection: 'row',backgroundColor: 'white',margin:7,padding:10}}>

              <Image source={{uri:homePage.pharmacyImages[1]}} style={{width:60,height:60,margin:10}} />
              <View style={{width:140}}>
                  <Text style={{color:'black'}}>asthalin</Text>
                  <Text style={{color:'black'}}>stimulating lotion</Text>
                  <Rating type='star'
  ratingCount={5}
  selectedColor='#f1c40f'
  imageSize={10}
  style={{margin:5,marginRight:90}}
/>
                  <Text style={{color:'#8FBC8F',fontWeight:'bold'}}>$25 (50% off)</Text>
              </View>

              <Pressable style={styles.pressable} onPress={() => console.warn('Pressed')} >
            <Text style={{textAlign: 'center',marginTop:10,fontWeight:'bold',color:'white'}}>Add+</Text>
            </Pressable>

          </View>
      
      </View>
      
  )
}

export default SearchComponent;

const styles= StyleSheet.create({
    pressable:{
      backgroundColor:'#8FBC8F',
      borderRadius:15,
      width:'25%',
      height:40,
      marginLeft:30,
      marginTop:20,
    
    },
});