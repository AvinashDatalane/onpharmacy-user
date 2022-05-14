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
    button1: {
        padding: 1,
        backgroundColor: '#1877F2',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 285,
        height: 51,
        marginBottom: 32,
        elevation: 7,


    },
    button2: {
        padding: 1,
        width: 281,
        height: 51,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        elevation: 7,

    },
    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    filterIcon: {
        height: 30,
        width: 20,
        resizeMode: 'contain',

    },
    filterText1: {
        color: '#FFFFFF',
        paddingLeft: 10,
        fontSize: 17,
    },
    filterText2: {
        color: '#807c7c',
        paddingLeft: 10,
        fontSize: 17,
    },
    storeImage: {
        height: 50,
        width: 60,
    },

    titleText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 30,
        color: '#000000',
        marginVertical: 20,
    },

    middleImage: {
        width: 348,
        height: 192,
    },
    middleText: {
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        letterSpacing: -0.005,
        color: '#000000',
        marginBottom: 32,
        marginTop: 25,
    },
});


export default styles;
