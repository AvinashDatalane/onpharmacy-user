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
import styles from './RequestStoreStyles';
import icons from '../../Assets/Icons/icons';
import StoreDetailsFrom from './StoreDetailsForm';
// Main container 

const store = ({ item }) => {
    return (
        <View>
            <Image source={{ uri: item }} style={styles.storeImageBackground} />
            <Image source={{ uri: item }} style={styles.storeImage} />
        </View>
    );
};


const RequestStore = (props: Props) => {
    return (
        <View style={styles.mainContainer}>

            <ImageBackground source={icons.bgtop} style={styles.topImage}>
                <View style={styles.header}>
                    <Image source={icons.onePhamacy} style={styles.headerIcon} />
                    <Text style={styles.headerText}>One {'\n'}
                        Pharmacy</Text>
                </View>

                <View style={styles.body}>
                    <Text style={styles.bodyText}>Add your details to {'\n'}create your store</Text>
                </View>

                <ImageBackground source={icons.bgbottom} style={styles.bottomImage}>

                    <ScrollView>
                        <StoreDetailsFrom />
                    </ScrollView>
                    <TouchableOpacity>
                        <View style={styles.footer}>
                            <Text style={styles.footerText}>Request Store</Text>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </ImageBackground>




        </View>
    );
};

export default RequestStore;

