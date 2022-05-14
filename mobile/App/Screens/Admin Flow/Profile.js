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
                    <Text style={styles.headerText}>One {'\n'}
                        Pharmacy</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>Welcome to {'\n'}One Pharmacy</Text>
                </View>
            </ImageBackground>
            <View style={styles.loginDesign}>
                <View style={styles.line1}></View>
                <Text style={styles.loginText}>Log in or Sign up</Text>
                <View style={styles.line2}></View>
            </View>


            <View style={styles.buttons}>

                <TouchableOpacity style={styles.button2} onPress={() => { props.navigation.navigate('RequestStore') }}>
                    <Image source={icons.googleWhite} style={styles.filterIcon} />
                    <Text style={styles.filterText2}>Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => { props.navigation.navigate('RequestStore') }}>
                    <Image source={icons.fb} style={styles.filterIcon} />
                    <Text style={styles.filterText1}>Sign in with Facebook</Text>
                </TouchableOpacity>
            </View>

            <ImageBackground source={icons.bgbottom} resizeMode="cover" style={styles.bottomImage}>
            </ImageBackground>

        </View>
    );
};

export default Profile;