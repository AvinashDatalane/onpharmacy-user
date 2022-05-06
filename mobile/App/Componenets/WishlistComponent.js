import React from 'react'
import {View,Text,Image,Pressable,ScrollView,StyleSheet} from 'react-native'
import {homePage} from '../data'
import Cross from 'react-native-vector-icons/Entypo'

const WishlistComponent = () => {
  return (
    <View>
           <View style={{flexDirection: 'row',backgroundColor: 'white',margin:5,padding:10}}>
      <View>
       <Image source={{uri:homePage.pharmacyImages[0]}} style={{width:90,height:90,margin:10}} />
       <View style={{flexDirection:'row',margin:6}}>
           <Cross name='cross' color='black' size={20} />
          <Text style={{color:'grey',marginLeft:10}}>Remove</Text>   
        </View>

{/* <Text style={{color:'grey'}}>Remove</Text> */}
</View>
<View style={{width:140,marginTop:15,marginLeft:18}}>
    <Text style={{color:'black',fontWeight:'bold',fontSize:15}}>Product Title</Text>
    {/* <Text style={{color:'black'}}>stimulating lotion</Text> */}
    {/* <Text style={{color:'#8FBC8F',fontWeight:'bold', margin:5,}}>$25</Text> */}

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
    <Text style={{fontWeight:'bold',fontSize:15,color:'#0F52BA'}}>36.99 USD</Text>
    <Text style={{fontWeight:'bold', marginLeft:45,fontSize:15,color:'grey'}}>48.56 USD</Text>
           
        </View>

    </View>
    <Pressable style={styles.pressable} onPress={() => console.warn('Pressed')} >
            <Text style={{textAlign:'center',marginTop:8,fontWeight:'bold',color:'white'}}>Buy Now</Text>
            </Pressable> 
        </View>
        
    </View>
    
    </View>
  )
}

export default WishlistComponent;

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