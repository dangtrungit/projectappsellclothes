import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native'
 
 class Login extends Component{

 render() {
        return(
            <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to Login!
            </Text>
            </View>
        );
    }
}
