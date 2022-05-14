import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
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
    topImage: {
        height: 310,
        width: '100%',
    },
    body: {
        width: 313,
        height: 73,
        marginTop: 62,
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

    formDiv: {
        width: 320,
        height: 783,
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        alignSelf: 'center',
        padding: 15,
        marginTop: 10,
        flex: 1,
    },

    input: {
        paddingLeft: 15,
        width: 279,
        height: 39,
        marginTop: 10,
        backgroundColor: '#F8FFFE',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#70CDAC',
        borderRadius: 8,
        textAlignVertical: 'top',
    },



    inputBig: {
        paddingLeft: 15,
        width: 279,
        height: 106,
        marginTop: 10,
        backgroundColor: '#F8FFFE',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#70CDAC',
        borderRadius: 8,
    },



    formtextContainer: {
        width: 146,
        height: 30,
        marginTop: 25,
        marginLeft: 5,

    },
    formtext: {

        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: -0.005,
        color: '#000000',

    },

    storeImage: {
        height: 50,
        width: 60,
    },
    bottomImage: {
        width: '100%',
        height: 500,

    },


    footer: {

        height: 48,
        width: 311,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#78ccac',
        borderRadius: 24,
        marginVertical: 35,
        alignSelf: 'center',
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
});

export default styles;
