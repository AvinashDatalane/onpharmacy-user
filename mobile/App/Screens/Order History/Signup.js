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
import styles from './SignupStyles';
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


const Signup = (props: Props) => {
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
                <Text style={styles.titleText}>Sign in and Checkout</Text>
            </View>
            <View style={styles.middleImage}>
                <Image source={icons.shopping} style={styles.shoppingCart} />
            </View>
            <View style={styles.middle}>
                <Text style={styles.middleText}>Login to checkout and purchase</Text>
            </View>
            <View style={styles.button1}>
                <TouchableOpacity style={styles.button}>
                    <Image source={icons.fb} style={styles.filterIcon} />
                    <Text style={styles.filterText1}>Sign in with Facebook</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.button2}>
                <TouchableOpacity style={styles.button}>
                    <Image source={icons.googleWhite} style={styles.filterIcon} />
                    <Text style={styles.filterText2}>Sign in with Google</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default Signup;