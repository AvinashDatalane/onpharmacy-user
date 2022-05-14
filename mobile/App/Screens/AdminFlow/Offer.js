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
import styles from './OfferStyles';
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


const Offer = (props: Props) => {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={icons.bgtop} style={styles.topImage}>
                <View style={styles.header}>
                    <Image source={icons.apollo} style={styles.headerIcon} />
                    <Text style={styles.logoText}>Apollo Pharmacy</Text>
                </View>
                <ImageBackground source={icons.bgbottom} style={styles.bottomImage}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Create New Offer</Text>
                    </View>
                    <ScrollView style={styles.form}>
                                <View style={styles.formtextContainer}>
                                    <Text style={styles.formtext}>Coupon Name</Text>
                                </View>
                                <TextInput
                                style={styles.input}
                                placeholder='MEDPLUS200'
                                placeholderTextColor='#626262'
                                />
                                <View style={styles.formtextContainer}>
                                    <Text style={styles.formtext}>Amount</Text>
                                </View>
                                <TextInput
                                style={styles.input}
                                placeholder='% 10'
                                placeholderTextColor='#626262'
                                />
                                <View style={styles.line1}>
                                    <View style={styles.optionContainer}>
                                        <Image source={icons.purplecircleCheck}/>
                                        <Text style={styles.checkText}>Credit Card</Text>
                                    </View>
                                    <View style={styles.optionContainer}>
                                        <Image source={icons.purplecircleCheck}/>
                                        <Text style={styles.checkText}>Flat Amount</Text>
                                    </View>
                                </View>
                                <View style={styles.subtitleContainer1}>
                                    <Text style={styles.subtitle}>Discount applies to specific products?</Text>
                                </View>
                                <View style={styles.line}>
                                    <View style={styles.optionContainer}>
                                        <Image source={icons.purplecircleCheck}/>
                                        <Text style={styles.checkText}>All</Text>
                                    </View>
                                    <View style={styles.optionContainer}>
                                        <Image source={icons.purplecircleCheck}/>
                                        <Text style={styles.checkTextSmall}>Specific Products</Text>
                                    </View>
                                </View>
                                <View style={styles.subtitleContainer}>
                                    <Text style={styles.subtitle}>Allocation</Text>
                                </View>
                                <View style={styles.line}>
                                    <View style={styles.optionContainer}>
                                        <Image source={icons.purplecircleCheck}/>
                                        <Text style={styles.checkText}>Cart</Text>
                                    </View>
                                    <View style={styles.optionContainer}>
                                        <Image source={icons.purplecircleCheck}/>
                                        <Text style={styles.checkText}>Product</Text>
                                    </View>
                                </View>
                                <View style={styles.optionContainer}>
                                    <Image source={icons.purplecircleCheck}/>
                                    <Text style={styles.checkText}>Activate Offer</Text>
                                </View>
                                <View style={styles.subtitleContainer}>
                                    <Text style={styles.subtitle}>Start Date</Text>
                                </View>
                                <View style={styles.date}>
                                    <Text style={styles.dateText}>Sun, 03 Apr, 2022</Text>
                                    <Image source={icons.down} style={styles.down}/>
                                </View>
                                <View style={styles.subtitleContainer}>
                                    <Text style={styles.subtitle}>Expiry Date</Text>
                                </View>
                                <View style={styles.date}>
                                    <Text style={styles.dateText}>Sun, 08 Apr, 2022</Text>
                                    <Image source={icons.down} style={styles.down}/>
                                </View>
                                <View style={styles.formtextContainer}>
                                    <Text style={styles.formtext}>Description</Text>
                                </View>
                                <TextInput 
                                multiline
                                style={styles.descInput}
                                placeholder='Description'
                                placeholderTextColor='#626262'
                                />
                                <View style={styles.empty}></View>
                    </ScrollView>
                </ImageBackground>
            </ImageBackground>
            <View style={styles.footerContainer}>
                <TouchableOpacity>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Offer;