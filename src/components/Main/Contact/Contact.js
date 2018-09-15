import React, { Component } from 'react';
import { View,Text,Image,Dimensions } from 'react-native';

const {height,width}= Dimensions.get('window');

export default class Contact extends Component {
    state = {  }
    render() {
        return (
            <View style={{justifyContent:'space-between',padding:10,flex:1}}>
                <View style={{elevation:10,padding:10,backgroundColor:'white'}}>
                    <Image
                        resizeMode='stretch'
                        style={{height:height*0.31,width:width-40}}
                        source={require('../../../images/GoogleMapTA.jpg')}/>
                
                </View>
                <View style={{elevation:10,padding:10,backgroundColor:'white'}}>
                    <View style={{padding:10,borderBottomWidth:1,flexDirection:"row",justifyContent:'space-between'}}>
                        <Image                       
                            source={require('../../../images/icons8-location-24.png')}/>
                        <Text
                            style={{color:'red'}}>
                            Son Duong / Tuyen Quang
                        </Text>
                    </View>

                    <View style={{padding:10,borderBottomWidth:1,flexDirection:"row",justifyContent:'space-between'}}>
                        <Image                       
                            source={require('../../../images/icons8-phone-24.png')}/>
                        <Text
                            style={{color:'red'}}>
                            (+84) 978225676
                        </Text>
                    </View>

                    <View style={{padding:10,borderBottomWidth:1,flexDirection:"row",justifyContent:'space-between'}}>
                        <Image                       
                            source={require('../../../images/icons8-gmail-24.png')}/>
                        <Text
                            style={{color:'red'}}>
                            Son Duong / Tuyen Quang
                        </Text>
                    </View>

                    <View style={{padding:10,flexDirection:"row",justifyContent:'space-between'}}>
                        <Image                       
                            source={require('../../../images/icons8-about-24.png')}/>
                        <Text
                            style={{color:'red'}}>
                            About
                        </Text>
                    </View>
                   
                
                </View>
            </View>
           
        );
    }
}

