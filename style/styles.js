import { StyleSheet } from 'react-native';
import theme from './theme';
export default StyleSheet.create({
    alignCenter: {
        alignContent: "center", justifyContent: 'center',
    },
    imageBg: {
        alignContent: "center", justifyContent: 'center', resizeMode: 'contain', width: '100%', height: '100%',
    },
    image: {
        alignSelf: 'center',
        resizeMode: 'contain',
        margin: 10,
    },
    headingText:
        { fontSize: 25, color: theme.COLOR_BLACK, marginTop: 20, textAlign: 'center', alignSelf: 'center' },
    input: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        paddingLeft: 10,
        height: 50,
        fontSize: 15,
        borderRadius: 5,
        color: theme.COLOR_BLACK,
        borderColor: theme.COLOR_GRAY,
        borderWidth: 1,
    },
    otpBg: { marginTop: 50,
         marginBottom: 20, 
        flex: 1, flexDirection: 'row',
         justifyContent:'center',
        alignContent:'center',},
    inputOtp: {
        justifyContent:'center',
        alignSelf:'center',
        textAlign:'center',
        margin:10,
        width: 50,
        height: 50,
        fontSize: 15,
        borderRadius: 5,
        color: theme.COLOR_BLACK,
        borderColor: theme.COLOR_GRAY,
        borderWidth: 1,
    },
    container: {
        backgroundColor: theme.COLOR_WHITE,
        marginBottom: 20,
        marginTop: 20,
    },
    btnBg: {
        borderRadius: 25,
        backgroundColor: theme.COLOR_WHITE,
        marginTop: 20, alignSelf: 'center',
        justifyContent: 'center',
        shadowColor: '#F6F6F6',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 10, paddingLeft: 20, paddingRight: 20,
    },
    btnBgPrimary: {
        borderRadius: 25,
        paddingLeft: 20, paddingRight: 20,
        backgroundColor: theme.PRIMARY_COLOR,
        marginTop: 35,
        alignSelf: 'center',
        justifyContent: 'center',
        shadowColor: '#F6F6F6',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 10
    },
    button: {
        padding: 10,
        color: theme.PRIMARY_COLOR,
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonWhite: {
        padding: 10,
        color: theme.COLOR_WHITE,
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageC: {
        height: 120,
        width: 120,
        borderRadius: 120 / 2,
        alignSelf: 'center',
        resizeMode: 'contain',
        margin: 10,
    },
    listItemImage: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        alignSelf: 'center',
        resizeMode: 'contain',
        margin: 10,
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: theme.COLOR_WHITE,
        padding: 10,
        margin: 10,
        shadowColor: '#F6F6F6',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5
    },
    listItemLargeText: {
        fontSize: 18,
        textAlign: 'left',
    },
    listItemMediumText: {
        fontSize: 15,
        textAlign: 'left',
    },
    listItemSmallText: {
        fontSize: 12,
        textAlign: 'left',

    },
    largeText: {
        fontSize: 20,
        textAlign: 'left',
        marginTop: 10,
        marginLeft: 20,
    },
    mediumText: {
        fontSize: 15,
        textAlign: 'left',
        marginTop: 10,
        marginLeft: 20,
    },
    largeHeaderText: {
        fontSize: 16
    },
    mediumHeaderText: {
        fontSize: 14,
        color: 'blue'
    }
});