import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Alert,

} from 'react-native';
import changeinfoApi from '../api/changeInfoApi'
import getToken from '../api/getToken'
import global from '../global'

const { height, width } = Dimensions.get('window');

export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const user = navigation.getParam('user');

        // console.log("my user of changeinfo", user.name)
        // const { nameC, addressC, phoneC } = this.state;
        this.state = {
            nameC: user.name,
            addressC: user.address,
            phoneC: user.phone,

        }
    }

    _goBack = () => {
        this.props.navigation.goBack();
    }

    _changeInfo = () => {
        const { nameC, addressC, phoneC } = this.state;
        getToken()
            .then(token => changeinfoApi(token, nameC, addressC, phoneC))
            .then(user => Alert.alert(
                'Notice',
                'Đổi thông tin thành công !',
                [
                    { text: 'OK', onPress: this._goBack() },
                ],
                global.onSignIn(user),
                { cancelable: false }))
            .catch(err => console.log("Error Change Info", err))

    }
    render() {
        const { nameC, addressC, phoneC } = this.state;

        return (
            <View >
                <View style={{ padding: 10, flexDirection: "row", backgroundColor: '#2c3e50', justifyContent: 'space-between', }}>
                    <Text style={{ flex: 1, color: 'white', textAlign: "center" }}>User Infomation</Text>
                    <Image
                        style={{ tintColor: '#00bcd4' }}
                        source={require('../../images/icons8-more-than-24.png')} />
                </View>

                <View style={{ padding: 10, height: height * 0.9, justifyContent: "center" }}>
                    <TextInput
                        onChangeText={text => this.setState({ nameC: text })}
                        value={nameC}
                        placeholder="Enter your name"
                        underlineColorAndroid='transparent'
                        style={{ margin: 10, color: '#00bcd4', backgroundColor: 'white', borderRadius: 20, borderWidth: 2, padding: 5, borderColor: '#2c3e50' }} />
                    <TextInput
                        onChangeText={text => this.setState({ addressC: text })}
                        value={addressC}
                        placeholder="Enter your address"
                        underlineColorAndroid='transparent'
                        style={{ margin: 10, color: '#00bcd4', backgroundColor: 'white', borderRadius: 20, borderWidth: 2, padding: 5, borderColor: '#2c3e50' }} />
                    <TextInput
                        onChangeText={text => this.setState({ phoneC: text })}
                        value={phoneC}
                        placeholder="Enter your phone number"
                        underlineColorAndroid='transparent'
                        style={{ margin: 10, color: '#00bcd4', backgroundColor: 'white', borderRadius: 20, borderWidth: 2, padding: 5, borderColor: '#2c3e50' }} />
                    <TouchableOpacity
                        onPress={this._changeInfo}
                        style={{ margin: 10, backgroundColor: '#2c3e50', padding: 10, borderRadius: 20, borderWidth: 1, borderColor: '#2c3e50' }}>
                        <Text style={{ color: 'white', textAlign: "center" }}>CHANG YOUR INFOMATION</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

