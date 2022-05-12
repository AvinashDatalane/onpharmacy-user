import React from 'react'
import {Text,View,Pressable,StyleSheet,ScrollView,Image,TextInput,TouchableOpacity} from 'react-native'
import icons from '../../Assets/Icons/icons'
import {homePage} from '../../data'
import StoreComponent from '../../Componenets/StoreComponent'
import styles from './StoreStyles'

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

       <View style={{flexDirection: 'row',marginTop:30
      }}>
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



