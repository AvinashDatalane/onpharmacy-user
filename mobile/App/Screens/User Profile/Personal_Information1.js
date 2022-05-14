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
import styles from './Personal_Information1Styles';
import ImageCarousel from '../../Componenets/imageCarousel';
import { homePage } from '../../data';
import icons from '../../Assets/Icons/icons';
import PersonalDetailsForm from './PersonalDetailsForm';

/**
 * Main container for newsfeed
 */

const store = ({ item }) => {
    return (
        <View>
            <Image source={{ uri: item }} style={styles.storeImageBackground} />
            <Image source={{ uri: item }} style={styles.storeImage} />
        </View>
    );
};

const Personal_Information1 = (props: Props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Image source={icons.Apollo} style={styles.headerIcon} />
                <Text style={styles.logoText}>Apollo Pharmacy</Text>
            </View>
            <View style={styles.headerContainer}>
                <View style={styles.searchBarContainer}>

                    <Image source={icons.searchBlue} style={styles.searchIcon} />

                    <TextInput
                        style={styles.searchBarText}
                        placeholder={'Search Medicines, Healthcare Products & Others'}
                        placeholderTextColor='#9E9E9E'
                    />
                </View>
                <View style={styles.locationIcon}>
                    <Image source={icons.locationIcon} style={styles.location} />
                </View>
            </View>
            <View style={styles.middle}>
                <Text style={styles.titleText}>Personal Information</Text>
            </View>

            <ScrollView>
                <PersonalDetailsForm />
            </ScrollView>

            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Personal_Information2') }}>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Next -></Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Personal_Information1;