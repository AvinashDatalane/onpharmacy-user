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
import styles from './Personal_Information3Styles';
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

//keyExtractor={(item) => item.id}
//extraData={selectedId}

const Personal_Information3 = (props: Props) => {
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
                <Text style={styles.titleText}>Your Addresses</Text>
            </View>

            <ScrollView>


                <View style={styles.card}>
                    <View style={styles.addressLine1}>
                        <Text style={styles.line1}>Home</Text>
                        <Image source={icons.pen} style={styles.penIcon} />
                        <Image source={icons.trash} style={styles.trashIcon} />
                    </View>
                    <View style={styles.addressLine2}>
                        <Text style={styles.line2}>Dhruv D</Text>
                        <Text style={styles.line3}>Samuel Avenue,</Text>
                        <Text style={styles.line4}>Virgin Islands, Perth</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.addressLine1}>
                        <Text style={styles.line1}>Home</Text>
                        <Image source={icons.pen} style={styles.penIcon} />
                        <Image source={icons.trash} style={styles.trashIcon} />
                    </View>
                    <View style={styles.addressLine2}>
                        <Text style={styles.line2}>Dhruv D</Text>
                        <Text style={styles.line3}>Samuel Avenue,</Text>
                        <Text style={styles.line4}>Virgin Islands, Perth</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.addressLine1}>
                        <Text style={styles.line1}>Home</Text>
                        <Image source={icons.pen} style={styles.penIcon} />
                        <Image source={icons.trash} style={styles.trashIcon} />
                    </View>
                    <View style={styles.addressLine2}>
                        <Text style={styles.line2}>Dhruv D</Text>
                        <Text style={styles.line3}>Samuel Avenue,</Text>
                        <Text style={styles.line4}>Virgin Islands, Perth</Text>
                    </View>
                </View>
            </ScrollView>

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