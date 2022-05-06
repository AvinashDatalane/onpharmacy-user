import React from 'react'
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native'
import SearchComponent from '../Componenets/SearchComponent'
import icons from '../Assets/Icons/icons'


const SearchScreen = () => {
  return (
      <>


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

    <SearchComponent />
    <SearchComponent />
    <SearchComponent />
    


    </>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
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
      searchBarContainer: {
        height: 40,
        width: '90%',
        borderRadius: 9,
        borderColor: '#70CDAC',
        flexDirection: 'row',
        borderWidth: 1,
      },
      header: {
        height: 60,
        width: '88%',
        flexDirection: 'row',
        alignItems: 'center',
      },
      logoText: {
        width: 85,
        fontWeight: 'bold',
        marginLeft: 10,
        color:'black'
      },
})