import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {

        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    header: {
        height: 60,
        width: 325,
        left: -22,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerIcon: {
        height: 41.45,
        width: 52,
        resizeMode: 'cover',
    },
    logoText: {
        width: 194,
        marginLeft: 5,
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 24,
        color: '#000000',
    },
    searchBarContainer: {
        height: 40,
        width: 325,
        left: -15,
        borderRadius: 8,
        borderColor: '#6463F9',
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    searchIcon: {
        width: 15,
        height: 14,
        left: -5,

    },
    searchBarText: {
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 11,
        color: '#9E9E9E',

    },
    locationIcon: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        marginLeft: 15,
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 30,
        color: '#000000',
        marginTop: 18,
    },
    middle: {
        flexDirection: 'column',
        alignSelf: 'flex-start',

    },
    footerContainer: {
        height: 85,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#FFFFFF',
        alignItems: 'flex-end',
        top: 100,
    },
    footer: {
        height: 48,
        width: 311,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#6463F9',
        borderRadius: 24,
    },
    footerText: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 18,
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
    },

    card1: {
        marginVertical: 20,
        padding: 15,
        width: 350,
        height: 140,
        backgroundColor: '#FFFFFF',
        elevation: 8,
        borderRadius: 10,
    },
    card2: {

        padding: 15,
        width: 350,
        height: 48,
        backgroundColor: '#FFFFFF',
        elevation: 8,
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line1: {
        width: 330,
        height: 25,
        flexDirection: 'row',
        marginBottom: 4,
    },
    line2: {
        width: 115,
        height: 18,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 18,
        color: '#000000',
        marginBottom: 4,
        marginLeft: 5,
    },
    line3: {
        width: 74,
        height: 18,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 18,
        color: '#000000',
        marginBottom: 1,
        marginLeft: 5,
    },
    line4: {
        width: 340,
        height: 45,
        flexDirection: 'row',
        marginTop: 5
    },


    cardHolder: {
        width: 221,
        height: 42,
        backgroundColor: '#F9F9F9',
        borderColor: '#D1D1D1',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 12,
        marginRight: 34,
        paddingLeft: 15,

    },

    checkbox: {
        resizeMode: 'contain',
    },
    Visa: {
        width: 118,
        height: 18,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 18,
        color: '#000000',
        marginLeft: 11,
        marginRight: 95,
    },
    Visa1: {
        width: 118,
        height: 18,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 18,
        color: '#000000',
        marginLeft: 11,
        marginRight: 9,
    },
    visaIcon: {
        resizeMode: 'contain',
        marginRight: 15,

    },
    penIcon: {
        resizeMode: 'contain',
        marginRight: 27,
        justifyContent: 'center',
        alignItems: 'center',
    },
    trashIcon: {
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
    },
    expired: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 18,
        color: '#000000',
        marginRight: 20,
    },
    dropdownIcon: {
        resizeMode: 'contain',

    },


});


export default styles;