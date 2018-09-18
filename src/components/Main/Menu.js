import React, { Component } from 'react';
import {
  Text, View
  , TouchableOpacity,
  Button, Image, Dimensions
  , ScrollView,
} from 'react-native';

import styles from '../styles/Styles';
import global from '../global'
import saveToken from '../api/saveToken'
// import Authentication from '../Authentication/Authentication';

// import {
//   createStackNavigator
// } from 'react-navigation';


const { width, height } = Dimensions.get('window');
export default class Menu extends Component {

  // static navigationOptions = {

  // };
  constructor(props) {
    super(props);
    this.state = {
      title: 0,
      user: '',
    }
    global.onSignIn = this._onSignIn.bind(this);
    global.gotoProductDetail=this._gotoProductDetail.bind(this);

  }

  componentDidMount() {

  }

  _onSignIn(user) {
    this.setState({
      user: user
    })
    // saveToken('');
  }

  _onPress = () => {
   
    this.setState({
      title: this.state.title + 1
    })

  }
  _gotoAuthen = () => {
    this.props.navigation.navigate('Authentications', { itemId: this.state.title, otherParam: 'data of you' })
  }
  _gotoChangeInfo = () => {
    this.props.navigation.navigate('Changeinfos', { user: this.state.user })
  }
  _gotoOrderHistory = () => {
    this.props.navigation.navigate('OrderHistorys', { itemId: this.state.title, otherParam: 'data of you' })
  }

  _gotoProductDetail = (product) => {
    console.log("aaaaaaaaa",product)
    this.props.navigation.navigate('ProductDetails', { productkey: product })
  }

  _onLogin = () => {
    this.setState({
      isLogin: true,
    })
  }
  _onSignOut = () => {
    this.setState({
      user: '',
    })
    saveToken('')
  }

  render() {

    const logoutJSX = (
      <TouchableOpacity
        onPress={this._gotoAuthen}
        style={{
          marginTop: 10, height: height * 0.1, width: width / 2, borderColor: '#008090'
          , borderRadius: 10, elevation: 3, justifyContent: "center", borderWidth: 2
        }}>

        <Text
          style={{ color: '#008090', fontSize: 15, fontWeight: 'bold', textAlign: "center" }}>Sign In</Text>
      </TouchableOpacity>
    );

    const loginJSX = (
      <View>

        <TouchableOpacity
          onPress={this._gotoOrderHistory}
          style={{
            marginTop: 10, height: height * 0.1, width: width / 2, borderColor: '#008090'
            , borderRadius: 10, elevation: 3, justifyContent: "center", borderWidth: 2
          }}>

          <Text
            style={{ color: '#008090', fontSize: 15, fontWeight: 'bold', textAlign: "center" }}>Order History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this._gotoChangeInfo}
          style={{
            marginTop: 10, height: height * 0.1, width: width / 2, borderColor: '#008090'
            , borderRadius: 10, elevation: 3, justifyContent: "center", borderWidth: 2
          }}>
          <Text
            style={{ color: '#008090', fontSize: 15, fontWeight: 'bold', textAlign: "center" }}>Change Info</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this._onSignOut}
          style={{
            marginTop: 10, height: height * 0.1, width: width / 2, borderColor: '#008090'
            , borderRadius: 10, elevation: 3, justifyContent: "center", borderWidth: 2
          }}>

          <Text
            style={{ color: '#008090', fontSize: 15, fontWeight: 'bold', textAlign: "center" }}>Sign out</Text>
        </TouchableOpacity>

      </View>
    );
    const mainJSX = this.state.user ? loginJSX : logoutJSX;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.imageaccount}
            source={require('../../images/icons8-administrator-male-512.png')} />
          <Text style={{ color: '#008090', fontWeight: 'bold' }}>{this.state.user.name}</Text>
          {mainJSX}


          <Text style={styles.welcome}>
            Welcome to App Sale!
             </Text>
          <TouchableOpacity onPress={this._onPress}>
            <Text style={styles.instructions}>
              {this.state.title}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
