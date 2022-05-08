// @flow
import React, { Profiler } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    FlatList,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import styles from './Personal_Information3Styles';
// import ImageCarousel from '../../Componenets/imageCarousel';
//import { signupPage } from '../../data';
import icons from '../../Assets/Icons/icons';

// Main container 

const store = ({ item }) => {
    return (
        <View>
            <Image source={{ uri: item }} style={styles.storeImageBackground} />
            <Image source={{ uri: item }} style={styles.storeImage} />
        </View>
    );
};

const Personal_Information3 = (props: Props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Image source={icons.Apollo} style={styles.headerIcon} />
                <Text style={styles.logoText}>Apollo Pharmacy</Text>
            </View>

            <View style={styles.searchBarContainer}>
                <View style={styles.searchIcon}>
                    <Image source={icons.searchBlue} />
                </View>
                <TextInput
                    style={styles.searchBar}
                    placeholder={'Search Medicines, Healthcare Products & Others'}
                />
            </View>
            <View style={styles.locationIcon}>
                <Image source={icons.locationIcon} style={styles.location} />
            </View>

            <View style={styles.title}>
                <Text style={styles.titleText}>Your Addresses</Text>
            </View>



            <View style={styles.footerContainer}>
                <TouchableOpacity>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Confirm</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Personal_Information3;