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
        left: -15,

    },
    locationIcon: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },


    input: {
        paddingLeft: 15,
        width: 350,
        height: 42,
        marginTop: 5,
        backgroundColor: '#F9F9F9',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#D1D1D1',
        borderRadius: 12,
        color: '#151515'
    },
    inputName: {
        width: 160,
        marginTop: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#D1D1D1',
        borderRadius: 12,
        backgroundColor: '#F9F9F9'
    },

    form: {
        flex: 1,
        padding: 10,
        width: 375,
        height: 767,
        backgroundColor: '#FFFFFF',

    },
    titleText: {
        marginLeft: 22,
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
    formtextContainer: {
        width: 350,
        height: 18,
        marginTop: 23,
        marginLeft: 12,
    },
    formtext: {
        position: 'absolute',
        height: 18,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 12,
        lineHeight: 18,
        color: '#151515',
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

    textContainer: {
        height: 50,
        marginTop: 10,
        width: 370,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    storeImage: {
        height: 50,
        width: 60,
    },
});

export default styles;