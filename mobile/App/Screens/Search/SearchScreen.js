import React from 'react'
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native'
import SearchComponent from '../../Componenets/SearchComponent'
import icons from '../../Assets/Icons/icons'
import styles from './SearchStyles'

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

