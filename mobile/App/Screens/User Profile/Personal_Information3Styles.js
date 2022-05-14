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
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    locationIcon: {
        justifyContent: 'center',
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
        left: -15,

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
        marginBottom: 25,

    },
    footerContainer: {
        height: 85,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#FFFFFF',
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

    penIcon: {
        //height: 17,
        //width: 17,
        resizeMode: 'contain',
        marginLeft: 183,
    },
    trashIcon: {
        // height: 14,
        //width: 14,
        resizeMode: 'contain',
        marginLeft: 27,
    },




    card: {
        width: 341,
        height: 153,
        marginBottom: 14,
        padding: 16,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: '#FFFFFF',
    },
    addressLine1: {
        flexDirection: 'row',
        width: 292,
        height: 25,

    },
    addressLine2: {
        marginTop: 17,
        width: 134,
        height: 84,

    },
    line1: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 17,
        lineHeight: 24,
        color: '#000000',
    },
    line2: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 21,
        color: '#000000',
    },
    line3: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 21,
        color: '#000000',
    },
    line4: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 21,
        color: '#000000',
    },


});


export default styles;