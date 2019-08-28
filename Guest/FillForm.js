import React from 'react';
import { createStackNavigator, createAppContainer, HeaderBackButton } from 'react-navigation';
import {
    Text, TextInput, View, Alert, ActivityIndicator, TouchableWithoutFeedback,
    ScrollView, StatusBar,
} from 'react-native';
import styles from '../style/styles.js'
import theme from '../style/theme.js'
import VerifyOtp from './VerifyOtp.js'


class FillForm extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Fill Form',
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

    post = (name, username, mobile) => {
        this.props.navigation.navigate('VerifyOtp')
        // this.props.navigation.navigate('GuestList')
        // if (name.length > 0 && username.length > 0 && mobile.length > 0) {
        //     this.registerCall();
        // } else
        //     alert('Enter Below Details \n' + 'Name: ' + name + '\nUsername: ' + username + '\nMobile: ' + mobile)

    }

    registerCall() {
        this.setState({ isLoading: true });
        return fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                job: this.state.mobile,
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.data,
                }, function () {

                    this.setState({
                        name: '',
                        username: '',
                        mobile: '',
                    });
                    this.props.navigation.navigate('VerifyOtp')

                });

            })
            .catch((error) => {
                console.error(error);
                this.setState({ isLoading: false });
                Alert.alert("Error:" + error);
            });
    }

    state = {
        isLoading: false,
        dataSource: {},
        status: '',
        wholeResult: '',
        name: '',
        username: '',
        mobile: '',
    }

    handleName = (text) => {
        this.setState({ name: text })
    }

    handleUsername = (text) => {
        this.setState({ username: text })
    }

    handleMobile = (text) => {
        this.setState({ mobile: text })
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View >
                <StatusBar hidden={false} barStyle="default" backgroundColor={theme.PRIMARY_COLOR} />
                <ScrollView>
                    <View style={styles.container}>

                        <Text style={styles.headingText}>
                            Please enter Guest details </Text>

                        <View style={{ margin: 20, }}>
                            <View style={{ marginTop: 10, }}>
                                <TextInput style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="Name"
                                    placeholderTextColor={theme.COLOR_PLACEHOLDER}
                                    autoCapitalize="none"
                                    onChangeText={this.handleName} />
                            </View>
                            <View style={{ marginTop: 10, }}>
                                <TextInput style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="User Name"
                                    placeholderTextColor={theme.COLOR_PLACEHOLDER}
                                    autoCapitalize="none"
                                    onChangeText={this.handleUsername} />
                            </View>
                            <View style={{ marginTop: 10, }}>
                                <TextInput style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="Mobile Number"
                                    placeholderTextColor={theme.COLOR_PLACEHOLDER}
                                    autoCapitalize="none"
                                    maxLength = {10}
                            
                                    keyboardType ="numeric"
                                    onChangeText={this.handleMobile} />
                            </View>

                        </View>

                        <TouchableWithoutFeedback onPress={
                            () => this.post(this.state.name, this.state.username, this.state.mobile)} >
                            <View style={styles.btnBgPrimary}>
                                <Text style={styles.buttonWhite}>Submit</Text>
                            </View>

                        </TouchableWithoutFeedback>

                    </View>
                </ScrollView>
            </View>
        );
    }
}


const MainNavigator = createStackNavigator({
    FillForm: {
        screen: FillForm,
    },
    VerifyOtp: {
        screen: VerifyOtp,
        navigationOptions: {
            header: null,
        }
    },
}, {
        initialRouteName: 'FillForm',
    });

const App = createAppContainer(MainNavigator);

export default App;


