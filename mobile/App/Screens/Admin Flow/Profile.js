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
import styles from './ProfileStyles';
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


const Profile = (props: Props) => {
    return (
        <View style={styles.mainContainer}>

            <ImageBackground source={icons.bgtop} resizeMode="cover" style={styles.topImage}>
                <View style={styles.header}>
                    <Image source={icons.onePhamacy} style={styles.headerIcon} />
                    <Text style={styles.logoText}>One Pharmacy</Text>
                </View>
                <View style={styles.welcome}><Text style={styles.bodyText}>Welcome to One Pharmacy</Text></View>
            </ImageBackground>

            <View style={styles.line1}></View>
            <View style={styles.loginDesign}>
                <Text style={styles.loginText}>Log in or Sign up</Text>
            </View>
            <View style={styles.line2}></View>

            <View style={styles.button1}>
                <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('RequestStore') }}>
                    <Image source={icons.google} style={styles.filterIcon} />
                    <Text style={styles.filterText}>Sign in with Google</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.button2}>
                <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('RequestStore') }}>
                    <Image source={icons.fb} style={styles.filterIcon} />
                    <Text style={styles.filterText}>Sign in with Facebook</Text>
                </TouchableOpacity>
            </View>

            <ImageBackground source={icons.bgbottom} resizeMode="cover" style={styles.bottomImage}>
            </ImageBackground>

        </View>
    );
};

export default Profile;