import React from 'react';
import { createStackNavigator, createAppContainer, HeaderBackButton } from 'react-navigation';
import {
    Text, TextInput, View, Alert, ActivityIndicator, TouchableWithoutFeedback,
    ScrollView, StatusBar,
} from 'react-native';
import styles from '../style/styles.js'
import theme from '../style/theme.js'
import GuestList from './GuestList.js'


class VerifyOtp extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Verify Otp',
            headerStyle: {
                headerTintColor: theme.ACCENT_COLOR,
                backgroundColor: theme.PRIMARY_COLOR
            },
            headerLeft: <HeaderBackButton tintColor={theme.ACCENT_COLOR} onPress={() => navigation.goBack(null)} />,
            headerTintColor: theme.ACCENT_COLOR,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    };

    render() {
        return (
            <View >
                <StatusBar hidden={false} barStyle="default" backgroundColor={theme.PRIMARY_COLOR} />

                <View style={styles.container}>
                    <View style={styles.alignCenter}>
                        <Text style={styles.headingText}>
                            Enter OTP </Text>

                        <View style={styles.otpBg}>
                            <TextInput style={styles.inputOtp}
                                underlineColorAndroid="transparent"
                                placeholder=""
                                placeholderTextColor={theme.COLOR_PLACEHOLDER}
                                autoCapitalize="none"
                                keyboardType="numeric"
                                maxLength={1}
                                onChangeText={this.handleName} />
                            <TextInput style={styles.inputOtp}
                                underlineColorAndroid="transparent"
                                placeholder=""
                                placeholderTextColor={theme.COLOR_PLACEHOLDER}
                                autoCapitalize="none"
                                keyboardType="numeric"
                                maxLength={1}
                                onChangeText={this.handleName} />
                            <TextInput style={styles.inputOtp}
                                underlineColorAndroid="transparent"
                                placeholder=""
                                placeholderTextColor={theme.COLOR_PLACEHOLDER}
                                autoCapitalize="none"
                                keyboardType="numeric"
                                maxLength={1}
                                onChangeText={this.handleName} />
                            <TextInput style={styles.inputOtp}
                                underlineColorAndroid="transparent"
                                placeholder=""
                                placeholderTextColor={theme.COLOR_PLACEHOLDER}
                                autoCapitalize="none"
                                keyboardType="numeric"
                                maxLength={1}
                                onChangeText={this.handleName} />
                        </View>

                        <TouchableWithoutFeedback onPress={
                            () => this.props.navigation.navigate('GuestList')} >
                            <View style={styles.btnBgPrimary}>
                                <Text style={styles.buttonWhite}>Submit</Text>
                            </View>

                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        )
    }



}



const MainNavigator = createStackNavigator({
    VerifyOtp: {
        screen: VerifyOtp,
    },
    GuestList: {
        screen: GuestList,
        navigationOptions: {
            header: null,
        }
    },
}, {
        initialRouteName: 'VerifyOtp',
    });

const App = createAppContainer(MainNavigator);

export default App;