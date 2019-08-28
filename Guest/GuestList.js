import React from 'react';
import { createStackNavigator, createAppContainer, HeaderBackButton } from 'react-navigation';
import {
    Text, TextInput, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback,
    ScrollView, StatusBar, ActivityIndicator, FlatList,
} from 'react-native';
import styles from '../style/styles.js'
import theme from '../style/theme.js'
import Credentials from './Credentials.js'
// import Pagination, { Icon, Dot } from 'react-native-pagination';


class GuestList extends React.Component {

    componentDidMount() {
        this.getGuestUserList(this.state.current_page);
        // return fetch('https://reqres.in/api/users?page=2')
        // .then((response) => response.json())
        // .then((responseJson) => {
        //     this.setState({
        //         isLoading: false,
        //         dataSource: responseJson.data,
        //         total: responseJson.total,
        //         per_page: responseJson.per_page,
        //         current_page: responseJson.current_page,
        //     }, function () {

        //     });

        // })
        // .catch((error) => {
        //     console.error(error);
        // });

    }

    getGuestUserList = async pageNumber => {
        // alert("pageNumber" + pageNumber)
        return fetch(`https://reqres.in/api/users?page=${pageNumber}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json())
            .then((responseJson) => {
                var pageNumber = 1;
                if (responseJson.page === 4) {
                    pageNumber = 1;
                    this.setState({
                        isLoadMore: false,
                    })
                } else {
                    pageNumber = responseJson.page + 1;
                }
                var data = [];
                if (this.state.dataSource.length > 0) {
                    data = this.state.dataSource;
                    for (const key in responseJson.data) {
                        data.push(responseJson.data[key]);
                    }
                } else {
                    data = responseJson.data;
                }
                this.setState({
                    isFetching: false,
                    isLoading: false,
                    dataSource: data,
                    total: responseJson.total,
                    per_page: responseJson.per_page,
                    current_page: pageNumber,
                }, function () {
                    // alert("responseJson.data"+responseJson.data)
                });

            })
            .catch((error) => {
                console.error(error);
                alert("error" + error)
            });

    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Guests',
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

    constructor(props) {
        super(props);
        this.state = {
            isLoadMore: true,
            isFetching: false,
            isLoading: true,
            dataSource: [],
            total: 1,
            per_page: 0,
            current_page: 1,
        }
    }

    onViewableItemsChanged = ({ viewableItems, changed }) => this.setState({ dataSource: viewableItems })

    onRefresh() {
        if (this.state.isLoadMore) {
            this.setState({ isFetching: true });
            this.getGuestUserList(this.state.current_page);
        }

    }

    render() {
        const { navigate } = this.props.navigation;
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View>
                <StatusBar hidden={false} barStyle="default" backgroundColor={theme.PRIMARY_COLOR} />
                <View>
                    <FlatList
                        style={{padding : 10,}}
                        extraData={this.state}
                    data={this.state.dataSource}
                    ref={r => this.refs = r}//create refrence point to enable scrolling
                    renderItem={({ item }) =>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Credentials',
                            {
                                UserName: item.last_name,
                                Mobile: item.email,
                                avatar: item.avatar,
                            })}>

                            <View style={styles.listItem}>
                                <Image source={{ uri: item.avatar }}
                                    style={styles.listItemImage} >
                                </Image>

                                <View style={{
                                    flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginLeft: 10,}}>
                                    <Text style={styles.listItemLargeText}>Name: {item.first_name}</Text>
                                    <Text style={styles.listItemMediumText}>UserName: {item.last_name}</Text>
                                    <Text style={styles.listItemSmallText}>Mobile: {item.email}</Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>}
                    keyExtractor={({ id }, index) => id}
                    onRefresh={() => this.onRefresh()}
                    refreshing={this.state.isFetching}
                    />

                    {/* <Pagination
                        // dotThemeLight //<--use with backgroundColor:"grey"
                        listRef={this.refs}//to allow React Native Pagination to scroll to item when clicked  (so add "ref={r=>this.refs=r}" to your list)
                        paginationVisibleItems={this.state.viewableItems}//needs to track what the user sees
                        paginationItems={this.state.dataSource}//pass the same list as data
                        paginationItemPadSize={3} //num of items to pad above and below your visable items
                    /> */}
                </View>
            </View>
        )
    }

}


const MainNavigator = createStackNavigator({
    GuestList: {
        screen: GuestList,
    },
    Credentials: {
        screen: Credentials,
    },
}, {
        initialRouteName: 'GuestList',
    });

const App = createAppContainer(MainNavigator);

export default App;
