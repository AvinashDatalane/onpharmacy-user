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
import styles from './NewBranchStyles';

import icons from '../../Assets/Icons/icons';
import NewBranchForm from './NewBranchForm';

// Main container 

const store = ({ item }) => {
    return (
        <View>
            <Image source={{ uri: item }} style={styles.storeImageBackground} />
            <Image source={{ uri: item }} style={styles.storeImage} />
        </View>
    );
};


const Offer = (props: Props) => {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={icons.bgtop} style={styles.topImage}>
                <View style={styles.header}>
                    <Image source={icons.Apollo} style={styles.headerIcon} />
                    <Text style={styles.logoText}>Apollo Pharmacy</Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Create Branch</Text>
                </View>
                <ImageBackground source={icons.bgbottom} style={styles.bottomImage}>
                    <ScrollView>
                        <NewBranchForm />
                    </ScrollView>
                </ImageBackground>
            </ImageBackground>

            <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.footer}>
                    <Text style={styles.footerText}>Publish Branch --></Text>
                </TouchableOpacity>
            </View>

        </View >
    );
};

export default Offer;