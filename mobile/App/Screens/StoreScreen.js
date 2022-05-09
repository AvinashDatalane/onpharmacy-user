import React from 'react'
import {Text,View,Pressable,StyleSheet,ScrollView,Image,TextInput,TouchableOpacity} from 'react-native'
import icons from '../Assets/Icons/icons'
import {homePage} from '../data'
import StoreComponent from '../Componenets/StoreComponent'

const StoreScreen = () => {
  return (
    <ScrollView>
    <View style={styles.mainContainer}>
      
      <View style={styles.header}>
        <Image source={icons.onePhamacy} style={styles.headerIcon} />
        <Text style={styles.logoText}>One Pharamacy</Text>
      </View>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchIcon}>
          <Image source={icons.search} />
        </View>
        <TextInput
          style={styles.searchBar}
          placeholder={'Search Medicines, Healthcare Products & Others'}
        />
      </View>


     <View style={styles.filtersContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.sort} style={styles.filterIcon} />
          <Text style={styles.filterText}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.location} style={styles.filterIcon} />
          <Text style={styles.filterText}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={icons.category} style={styles.filterIcon} />
          <Text style={styles.filterText}>Category</Text>
        </TouchableOpacity>
      </View>
       <Image source={{uri:homePage.pharmacyImages[0]}} style={{width:'80%', height:200,margin:40}} />

       <View style={{flexDirection: 'row'}}>
           <Text style={{color:'black', fontWeight:'bold',fontSize:20}}>L A T E S T</Text>
           <Text style={{color:'black',fontSize:20}}> Products</Text>
       </View>
       
       <View style={{flexDirection: 'row'}}>
           <ScrollView horizontal>
           <StoreComponent />
           <StoreComponent />
           </ScrollView>
       </View>

       <View style={{flexDirection: 'row',marginTop:30}}>
           <Text style={{color:'black', fontWeight:'bold',fontSize:20}}>B E S T</Text>
           <Text style={{color:'black',fontSize:20}}> Selling</Text>
       </View>
       
       <View style={{flexDirection: 'row'}}>
           <ScrollView horizontal>
           <StoreComponent />
           <StoreComponent />
           </ScrollView>
       </View>
      </View>
    </ScrollView>
  )
}

export default StoreScreen;



const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  imageCrousel: {},
  header: {
    height: 60,
    width: '88%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    height: 55,
    resizeMode: 'contain',
  },
  logoText: {
    width: 85,
    fontWeight: 'bold',
    marginLeft: 10,
    color:'black'
  },
  carouselContainer: {
    width: '100%',
  },
  searchBarContainer: {
    height: 40,
    width: '90%',
    borderRadius: 9,
    borderColor: '#70CDAC',
    flexDirection: 'row',
    borderWidth: 1,
  },
  filterIcon: {
    height: 30,
    width: 20,
    resizeMode: 'contain',
  },
  filtersContainer: {
    height: 60,
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#70CDAC',
  },
  searchIcon: {
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    color: '#9E9E9E',
  },
  filterText: {
    color: 'white',
    paddingLeft: 3,
    fontSize: 17,
  },
  button: {
    borderColor: 'white',
    paddingVertical: 5,
    alignItems: 'center',
    height: 40,
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 20,
  },
  textContainer: {
    height: 50,
    marginTop: 10,
    width: 370,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'black',
    fontSize: 17,
  },
  storeImage: {
    height: 50,
    width: 60,
  },
});


