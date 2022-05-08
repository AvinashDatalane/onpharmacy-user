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
import styles from './PersonalInfo1Styles';
import ImageCarousel from '../../Componenets/imageCarousel';
import {homePage} from '../../data';
import icons from '../../Assets/Icons/icons';
import PersonalDetailsForm from './PersonalDetailsForm';

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

const PersonalInfo1 = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
            <Image source={icons.apollo} style={styles.headerIcon} />
            <Text style={styles.logoText}>Apollo Pharamacy</Text>
        </View>
        <View style={styles.searchBarContainer}>
            <View style={styles.searchIcon}>
            <Image source={icons.searchPurple} />
            </View>
            <TextInput
            style={styles.searchBarText}
            placeholder={'Search Medicines, Healthcare Products & Others'}
            placeholderTextColor= '#9E9E9E' 
            />
        </View>
      </View>
      
      <ScrollView>
        <PersonalDetailsForm />
      </ScrollView>
      <View style={styles.footerContainer}>
        <TouchableOpacity>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Next -></Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonalInfo1;