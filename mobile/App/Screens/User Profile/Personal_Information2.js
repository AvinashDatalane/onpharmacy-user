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
                <Text style={styles.titleText}>Saved Cards</Text>
            </View>

            <View style={styles.card1}>
                <View style={styles.line1}>
                    <Image source={icons.checkbox} style={styles.checkbox} />
                    <Text style={styles.Visa}>Visa ending in 9235</Text>
                    <Image source={icons.visa} style={styles.visaIcon} />
                </View>

                <Text style={styles.line2}>Expires on 03/2026</Text>
                <Text style={styles.line3}>Card Holder</Text>
                <View style={styles.line4}>
                    <TextInput
                        style={styles.cardHolder}
                        placeholder={'Dhruv Dave'}
                        placeholderTextColor='#A9A9A9'
                    />
                    <Image source={icons.pen} style={styles.penIcon} />
                    <Image source={icons.trash} style={styles.trashIcon} />
                </View>
            </View>

            <View style={styles.card2}>
                <Image source={icons.checkbox} style={styles.checkbox} />
                <Text style={styles.Visa1}>Visa ending in 9235</Text>
                <Text style={styles.expired}>03/2026</Text>
                <Image source={icons.visa} style={styles.visaIcon} />
                <Image source={icons.dropdown} style={styles.dropDownIcon} />
            </View>
            <View style={styles.card2}>
                <Image source={icons.checkbox} style={styles.checkbox} />
                <Text style={styles.Visa1}>Visa ending in 9235</Text>
                <Text style={styles.expired}>03/2026</Text>
                <Image source={icons.visa} style={styles.visaIcon} />
                <Image source={icons.dropdown} style={styles.dropDownIcon} />
            </View>

            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Personal_Information3') }}>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Next -></Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default Personal_Information2;