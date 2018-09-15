import React, { Component } from 'react';
import { View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
 } from 'react-native';

import styles from '../../styles/Styles'

const { width, height } = Dimensions.get('window');
export default class Collection extends Component{
    render(){
        const {types} = this.props;
        return(
            <TouchableOpacity
                onPress={this.props.gotoDetails}             
                style= {styles.wrapper}>
             <View style={{flex:1}}>
                <Text               
                    style={{color:'black',fontWeight:'bold'}}>
                    SPRING COLLECTION
                </Text>
             </View>                
                <View style={{flex:5}}>
                    <Image 
                        resizeMode="stretch"
                        style={styles.imagecustom2}
                        source={require('../../../temps/quanchun.jpg')}/>
                </View>
               
            </TouchableOpacity>
        );
    }
}
// 760 x 500


