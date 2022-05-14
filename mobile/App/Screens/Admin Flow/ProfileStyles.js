import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

    topImage: {
        height: 350,
        width: '100%',
    },

    body: {
        width: 315,
        height: 115,
        marginTop: 70,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    bodyText: {
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 26,
        lineHeight: 31,
        textAlign: 'center',
        letterSpacing: -0.005,
        color: '#000000',
    },
    loginText: {
        fontFamily: 'Outfit',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 23,
        textAlign: 'center',
        color: '#70CDAC',
    },
    loginDesign: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 30,
        marginVertical: 15,
    },
    line1: {

        width: 90,
        height: 0,
        marginRight: 20,
        borderColor: '#70CDAC',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    line2: {
        width: 90,
        height: 0,
        marginLeft: 20,
        borderColor: '#70CDAC',
        borderWidth: 1,
        borderStyle: 'solid',
    },

    button1: {
        padding: 1,
        backgroundColor: '#1877F2',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 323,
        height: 58,

    },
    button2: {
        padding: 1,
        width: 323,
        height: 58,
        backgroundColor: '#70CDAC',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 32,

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
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 23,
        color: '#FFFFFF',

    },

    filterText2: {
        color: '#FFFFFF',
        paddingLeft: 10,
        fontSize: 18,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 23,
    },
    header: {
        width: '100%',
        height: 80,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    headerIcon: {
        width: 56,
        height: 47,
        resizeMode: 'contain',
        marginHorizontal: 8,
    },
    headerText: {
        width: 173,
        height: 62,
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 22,
        lineHeight: 31,
        letterSpacing: -0.005,
        color: '#000000',
    },
    storeImage: {
        height: 50,
        width: 60,
    },
    bottomImage: {
        width: '100%',
        height: 430,

    },
});

export default styles;
