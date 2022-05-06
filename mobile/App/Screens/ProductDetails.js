import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList,Button,
    Pressable,
    StyleSheet,
    } from 'react-native';

    // import { Picker } from '@react-native-picker/picker';
    import Home from './Home/Home'
    import ButtonC from '../Componenets/ButtonC'

// import ImageCarousel from '../../Componenets/imageCarousel';
// import {homePage} from '../../data';
import ImageCarousel from '../Componenets/imageCarousel'
import { homePage } from '../data';    
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Feather';
import { Rating, AirbnbRating } from 'react-native-ratings';


const ProductDetails = (props) => {

  const renderItem =({item}) => {
    <View>
      <Image source={{uri : item.image}} style={{width:'80%', height:200,margin:40}} />
      <Text style={{color:'black'}}>{item.title}</Text>
      <Text style={{color:'black'}}>{item.description}</Text>
      </View>    
  }
    return(
        <ScrollView>
            
            
          {/* <ImageCarousel images={homePage.sponseredImages} /> */}
          <View style={{flexDirection:'row',marginTop:10,backgroundColor:'white'}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Icon1 style={{margin:5}} name='arrowleft' size={24} color='grey'/>
          </TouchableOpacity>

          <View style={{marginLeft:250,flexDirection:'row'}}>
           <TouchableOpacity>
             <Icon2 style={{margin:10}} name='share' size={24} color='grey'/>
            </TouchableOpacity>   
           <TouchableOpacity>
             <Icon3 style={{margin:10}} name='heart' size={24} color='grey'/>
           </TouchableOpacity>   
           <TouchableOpacity>
             <Icon2 style={{margin:10}} name='dots-three-vertical' size={24} color='grey'/>
            </TouchableOpacity>   

          </View>
         
          </View>
          

          {/* <Text style={{color:'black'}}>History</Text> */}
          <View >
            <View style={{backgroundColor:'white'}}>
          <Image source={{uri : homePage.sponseredImages[1]}} style={{width:'80%', height:200,margin:40}} />
          <Text style={{color:'black',fontWeight:'bold',fontSize:20,margin:10}}>Fexophenadian</Text>
          <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection:'row'}}>
          <Text style={{color:'#8FBC8F',fontWeight:'bold',fontSize:17,margin:10}}>$25</Text>
          <Text style={{color:'black',fontSize:14,margin:10}}>(50% off)</Text>
          </View>
          <View style={{flexDirection:'row',marginLeft:50}}>
          <TouchableOpacity>
             <Icon3 style={{margin:10}} name='heart' size={24} color='grey'/>
           </TouchableOpacity> 
          <Text style={{color:'black',fontWeight:'bold',fontSize:16,margin:10}}>Add to my wishlist</Text>
          </View>
          </View>
          </View>

          <View style={{margin:10,backgroundColor:'white'}}> 
              <Text style={{color:'grey',margin:12}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum 
              </Text>
          </View>

          <View style={{backgroundColor:'white',flexDirection: 'row'}}>
          {/* <Button style={{width:'50%',borderRadius:'5'}} title='Add to Cart' color='#8FBC8F' onPress={() => console.warn('Pressed')} /> */}
          <Pressable style={styles.pressable} onPress={() => console.warn('Pressed')} >
            <Text style={{textAlign: 'center',marginTop:13,fontWeight:'bold'}}>Add To Cart</Text>
            </Pressable>
            
            {/* <View style={{backgroundColor:'grey',width:10,height:10,flexDirection:'row',marginLeft:80,margin:15}}>
              <Text style={{height:10,width:100}}>1 pcs</Text>
              <Text>Pcs ↓ </Text>
            </View> */}
            <View style={{flexDirection: 'row',margin:20,marginLeft:40,backgroundColor:'#C0C0C0',borderRadius:20,borderWidth:1,borderColor:'grey'}}>
            <Text style={{color:'grey',margin:5}}>1 pcs</Text>
            <Text style={{color:'grey',margin:5}}>|</Text>
            <Text style={{color:'black',margin:5,fontWeight:'bold'}}>Pcs ↓</Text>
            </View>
            
          </View>

          <View style={{backgroundColor:'white'}}>
          <Text style={{color:'black',fontWeight:'bold',fontSize:20,margin:10,marginLeft:30}}>Additional Details</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{color:'grey',margin:10,marginLeft:30}}>Delivery Details</Text>
            <View>
            <Text style={{color:'black',margin:10,marginLeft:30}}>Home Delivery Available,</Text>
            <Text style={{color:'black',marginLeft:30}}>Cash On Delivery</Text>
            </View>
            {/* <Text style={{color:'black'}}>Cash On Delivery</Text> */}

          </View>
          </View>

          <View>

          </View> 

          <View style={{backgroundColor:'white',margin:10}}>
          <Text style={{color:'black',fontWeight:'bold',fontSize:20,margin:10,marginLeft:30}}>Customer Ratings</Text>
          <View style={{flexDirection: 'row'}} >
            <Text style={{color:'black',fontWeight:'bold',fontSize:17,margin:10,marginLeft:30}}>Cheers</Text>
            <Rating type='star'
  ratingCount={5}
  selectedColor='#f1c40f'
  imageSize={15}
  style={{marginLeft:140,margin:10}}
/>
          </View>

          <Text style={{color:'black',margin:20}}>If we dont grow them ourselves,we source them from carefully chosen suppliers, preferring to buy locally</Text>
          <View style={{flexDirection: 'row'}}>
          <Pressable style={styles.pressables} onPress={() => console.warn('Pressed')} >
            <Text style={{textAlign: 'center',marginTop:13,fontWeight:'bold',color:'white'}}>More Reviews</Text>
            </Pressable>

            <Pressable style={styles.pressables} onPress={() => console.warn('Pressed')} >
            <Text style={{textAlign: 'center',marginTop:13,fontWeight:'bold',color:'white'}}>Write a Review</Text>
            </Pressable>
            </View>
          </View>

          <View style={{backgroundColor:'white',margin:10}}>
          <Text style={{color:'black',fontWeight:'bold',fontSize:20,margin:10,marginLeft:30}}>Products you may love</Text>
          <FlatList
        data={homePage.moreProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
      />
          <Image source={{uri : homePage.sponseredImages[2]}} style={{width:'80%', height:200,margin:40}} />

          <Pressable style={styles.moreprods} onPress={() => console.warn('Pressed')} >
            <Text style={{textAlign: 'center',marginTop:13,fontWeight:'bold',color:'white'}}>More Products →</Text>
            </Pressable> 
          </View>
            
          </View>
        
        </ScrollView>
    )
}


export default ProductDetails;

const styles= StyleSheet.create({
  pressable:{
    backgroundColor:'#8FBC8F',
    borderRadius:15,
    width:'40%',
    height:50,
    marginLeft:30,
    marginTop:10
  },
  pressables:{
    backgroundColor:'black',
    borderRadius:15,
    width:'40%',
    height:50,
    marginLeft:30,
    marginTop:10
  },
  moreprods:{
    backgroundColor:'black',
    borderRadius:15,
    width:'80%',
    height:50,
    marginLeft:30,
    marginTop:10
  }
})


