// @flow
import React, { Profiler, useState } from 'react';
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

import styles from './Personal_Information2Styles';
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


const Personal_Information2 = (props: Props) => {
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
                <Text style={styles.titleText}>Saved Cards</Text>
            </View>

            <View style={styles.card1}>
                <View style={styles.checkbox}>
                    <Image source={icons.checkbox} style={styles.checkIcon} />
                    <Text style={styles.label1}>Visa Ending in 9235</Text>
                    <Image source={icons.visa} style={styles.visaLogo} />
                    <Text style={styles.label2}>Expires on 03/2026</Text>
                    <Text style={styles.label3}>Card Holder</Text>
                </View>
                <View style={styles.cardHolder}>
                    <TextInput style={styles.cardHolderName} placeholder={'Dhruv Dave'} />
                </View>
                <Image source={icons.pen} style={styles.penIcon} />
                <Image source={icons.trash} style={styles.trashIcon} />
            </View>

            <View style={styles.card2}>
                <View style={styles.checkbox}>
                    <Image source={icons.checkbox} style={styles.checkIcon} />
                    <Text style={styles.label1}>Visa Ending in 9235</Text>
                    <Text style={styles.label4}>03/2026</Text>
                    <Image source={icons.visa} style={styles.visaLogo1} />
                    <Image source={icons.dropdown} style={styles.dropdownLogo} />
                </View>

            </View>

            <View style={styles.card3}>
                <View style={styles.checkbox}>
                    <Image source={icons.checkbox} style={styles.checkIcon} />
                    <Text style={styles.label1}>Visa Ending in 9235</Text>
                    <Text style={styles.label4}>03/2026</Text>
                    <Image source={icons.visa} style={styles.visaLogo1} />
                    <Image source={icons.dropdown} style={styles.dropdownLogo} />
                </View>
            </View>
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

export default Personal_Information2;