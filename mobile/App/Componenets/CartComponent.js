import React from 'react'
import {View,Text,Image,Pressable,ScrollView,StyleSheet} from 'react-native'
import {homePage} from '../data'
import Cross from 'react-native-vector-icons/Entypo'
import Heart from 'react-native-vector-icons/AntDesign'
import Compare from 'react-native-vector-icons/MaterialCommunityIcons'
import { Rating, AirbnbRating } from 'react-native-ratings';

const CartComponent = () => {
  return (
    <View>
           <View style={{flexDirection: 'row',backgroundColor: 'white',margin:5,padding:10}}>
      <View>
       <Image source={{uri:homePage.pharmacyImages[0]}} style={{width:90,height:90,margin:10}} />

       <View style={{flexDirection:'row',margin:6}}>
           <Heart name='hearto' color='black' size={18} />
          <Text style={{color:'grey',marginLeft:10}}>Wishlist</Text>      
        </View>

        <View style={{flexDirection:'row',margin:6}}>
           <Compare name='compare' color='#A52A2A' size={20} />
          <Text style={{color:'grey',marginLeft:10}}>Compare</Text>      
        </View>

        <View style={{flexDirection:'row',margin:6}}>
           <Cross name='cross' color='black' size={20} />
          <Text style={{color:'grey',marginLeft:10}}>Remove</Text>      
        </View>


</View>
<View style={{width:140,marginTop:15,marginLeft:18}}>
    <Text style={{color:'black',fontWeight:'bold',fontSize:15}}>Product Title</Text>
    <View>
        <View style={{flexDirection:'row',margin:6}}>
            <Text style={{color:'grey'}}>Farm:</Text>
            <Text style={{color:'black',marginLeft:15}}>Tharamis Farm</Text>
        </View>

        <View style={{flexDirection:'row',margin:6}}>
            <Text style={{color:'grey'}}>Freshness:</Text>
            <Text style={{color:'black',marginLeft:15}}>1 Day old</Text>
        </View>

        <View style={{flexDirection:'row',margin:6}}>
    <Text style={{fontWeight:'bold',fontSize:15,color:'#8FBC8F'}}>36.99 USD</Text>       
        </View>

        <Rating type='star'
  ratingCount={5}
  selectedColor='black'
  imageSize={10}
  style={{margin:5,marginRight:90,color:'black'}}
/>

    </View>
    {/* <Pressable style={styles.pressable} onPress={() => console.warn('Pressed')} >
            <Text style={{textAlign:'center',marginTop:8,fontWeight:'bold',color:'white'}}>Buy Now</Text>
            </Pressable>  */}
             <View style={{flexDirection: 'row',margin:20,marginLeft:120,backgroundColor:'#C0C0C0',borderRadius:20,borderWidth:1,borderColor:'grey',width:'85%'}}>
            <Text style={{color:'grey',margin:5}}>1 pcs</Text>
            <Text style={{color:'grey',margin:5}}>|</Text>
            <Text style={{color:'black',margin:5,fontWeight:'bold'}}>Pcs ↓</Text>
            </View>
        </View>
        
    </View>
    
    </View>
  )
}

export default CartComponent;

const styles = StyleSheet.create({
    pressable:{
        backgroundColor:'#0F52BA',
        borderRadius:15,
        width:'80%',
        height:40,
        marginLeft:120,
        marginTop:18
      },
})