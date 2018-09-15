import React, {Component} from 'react';
import {

    Text,
    View,
} from 'react-native'
 
export class Registry extends Component{
    constructor(){
        super();
        this.state={
           title:0
        }
    }

    render() {
        return(
            <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to Registry!
            </Text>
            </View>
        );
    }
}
