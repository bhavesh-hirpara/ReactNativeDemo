import React from 'react';
import { createStackNavigator, createAppContainer, HeaderBackButton } from 'react-navigation';
import {
    Text, TextInput, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback,
    ScrollView, StatusBar, ActivityIndicator, FlatList,
} from 'react-native';
import styles from '../style/styles.js'
import theme from '../style/theme.js'



export default class Credentials extends React.Component {

    componentDidMount() {
        this.generatePassword();
    }
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
    }

    state = {
        Password: 1234,}

    generatePassword = () => {
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        var password = ''+randomNumber + randomNumber + randomNumber ;
        this.setState({ 
            Password: password
        })
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Your Credentials',
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
                        <Image source={{ uri: this.params.avatar }}
                            style={styles.imageC} >
                        </Image>

                        <Text style={styles.largeText}>UserName: {this.params.UserName}</Text>
                        <Text style={styles.mediumText}>Password: {this.state.Password}</Text>
                    </View>
                </View>
            </View>
        );
    }


}