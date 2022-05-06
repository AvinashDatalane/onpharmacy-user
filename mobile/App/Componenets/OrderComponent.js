import React from 'react'
import {View,Text,Image,Pressable,ScrollView,StyleSheet} from 'react-native'
import { homePage } from '../data'


const OrderComponent = () => {
  return (
    <View>
           <View style={{flexDirection: 'row',backgroundColor: 'white',margin:5,padding:10}}>

<Image source={{uri:homePage.pharmacyImages[1]}} style={{width:60,height:60,margin:10}} />
<View style={{width:140,marginTop:15}}>
    <Text style={{color:'black',fontWeight:'bold',}}>asthalin</Text>
    {/* <Text style={{color:'black'}}>stimulating lotion</Text> */}
    <Text style={{color:'#8FBC8F',fontWeight:'bold', margin:5,}}>$25</Text>
            
        </View>
        <Pressable style={styles.pressable} onPress={() => console.warn('Pressed')} >
            <Text style={{textAlign: 'center',marginTop:6,fontWeight:'bold',color:'white'}}>Delivered</Text>
            </Pressable> 
    </View>
    </View>
  )
}

export default OrderComponent;

const styles = StyleSheet.create({
    pressable:{
        backgroundColor:'#8FBC8F',
        borderRadius:15,
        width:'30%',
        height:30,
        marginLeft:15,
        marginTop:25
      },
})