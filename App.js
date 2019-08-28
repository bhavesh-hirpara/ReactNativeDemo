/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import { createStackNavigator, createAppContainer, HeaderBackButton } from 'react-navigation';
import styles from './style/styles.js'
import FillForm from './Guest/FillForm.js'
import theme from './style/theme.js'


class SplashScreen extends React.Component {
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Fragment>
        <StatusBar hidden={true} backgroundColor={theme.PRIMARY_COLOR} barStyle="default" />
        <ImageBackground source={require('./images/b2.jpg')}
          style={styles.imageBg}  >
          <View style={styles.alignCenter}>
            <Image source={require('./images/user.png')}
              style={styles.image} >
            </Image>
  
            <TouchableWithoutFeedback onPress={() => navigate('FillForm')}>
              <View style={styles.btnBg}>
                <Text style={styles.button}> Guest User</Text>
              </View>
  
            </TouchableWithoutFeedback>
        
          </View>
        </ImageBackground>
      </Fragment>
    );
  }
}


const MainNavigator = createStackNavigator({
  SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
          header: null,
      }
  },
  FillForm: {
      screen: FillForm,
      navigationOptions: {
        header: null,
    }
  },
}, {
      initialRouteName: 'SplashScreen',
  });

const App1 = createAppContainer(MainNavigator);

export default App1;
// export default SplashScreen;


