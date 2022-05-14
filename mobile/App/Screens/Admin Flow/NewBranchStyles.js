import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    topImage: {
        width: '100%',
        height: 365,

    },

    header: {
        height: 70,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
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


    titleContainer: {
        marginLeft: 30,
        marginVertical: 20,
        width: 142,
        height: 30,

    },
    title: {

        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'center',
        letterSpacing: 0.03,
        color: '#000000',
    },

    formDiv: {
        width: '100%',
        height: 800,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        padding: 15,
        marginTop: 10,
        flex: 1,
    },


    formHeading: {
        width: 193,
        height: 24,
        marginLeft: 18,
        marginTop: 10,
    },
    formHeadingText: {
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        color: '#000000',

    },
    input: {
        paddingLeft: 15,
        width: 330,
        height: 39,
        marginTop: 10,
        backgroundColor: '#F8FFFE',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#3767E2',
        borderRadius: 8,
        textAlignVertical: 'top',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        alignSelf: 'center',
        color: '#626262',
    },

    inputBig: {
        paddingLeft: 15,
        width: 330,
        height: 120,
        marginTop: 10,
        backgroundColor: '#F8FFFE',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#3767E2',
        borderRadius: 8,
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        alignSelf: 'center',
        color: '#626262',
    },



    formtextContainer: {
        width: 170,
        height: 23,
        marginTop: 25,
        marginLeft: 25,

    },
    bottomImage: {
        width: '100%',
        height: 500,

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
    footer: {
        height: 48,
        width: 311,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#6864fc',
        borderRadius: 24,
        marginVertical: 30,
        alignSelf: 'center',

    },
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#FFFAFA',
        width: '100%',
        height: 100,
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

    Invite: {

        height: 48,
        width: 311,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#6864fc',
        borderRadius: 24,
        marginVertical: 30,
        alignSelf: 'center',
    },
    InviteText: {
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
