// @flow
import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './HomeStyles';
import ImageCarousel from '../../Componenets/imageCarousel';
import {homePage} from '../../data';
import icons from '../../Assets/Icons/icons';

/**
 * Main container for newsfeed
 */

const store = ({item}) => {
  return (
    <View>
      <Image source={{uri: item}} style={styles.storeImageBackground} />
      <Image source={{uri: item}} style={styles.storeImage} />
    </View>
  );
};

const Home = (props: Props) => {
  return (
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
      <ScrollView>
        <View style={styles.carouselContainer}>
          <ImageCarousel images={homePage.sponseredImages} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>ALL STORES</Text>
          <Text style={styles.headerText}>View All</Text>
        </View>
        <FlatList
          data={homePage.pharamacyImages}
          horizontal
          renderItem={store}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
