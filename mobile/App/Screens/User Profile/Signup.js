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
import DropShadow from "react-native-drop-shadow";
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
                <Text style={styles.titleText}>Sign in and Checkout</Text>
                <Image source={icons.shopping} style={styles.shoppingCart} />
                <Text style={styles.middleText}>Login to checkout and purchase</Text>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button1} onPress={() => { props.navigation.navigate('Personal_Information1') }}>
                    <Image source={icons.fb} style={styles.filterIcon} />
                    <Text style={styles.filterText1}>Sign in with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={() => { props.navigation.navigate('Personal_Information1') }}>
                    <Image source={icons.googleWhite} style={styles.filterIcon} />
                    <Text style={styles.filterText2}>Sign in with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Signup;