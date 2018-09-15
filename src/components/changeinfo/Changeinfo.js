import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    
} from 'react-native';

const { height , width} = Dimensions.get('window');

 export default class ChangeInfo extends Component {
    state = {  }
    render() {
        return (
            <View >
                <View style={{padding:10,flexDirection:"row",backgroundColor:'#2c3e50',justifyContent:'space-between',}}>
                    <Text style={{flex:1,color:'white',textAlign:"center"}}>User Infomation</Text>
                    <Image 
                        style={{tintColor:'#00bcd4'}}
                        source={require('../../images/icons8-more-than-24.png')}/>
                </View>

                <View style={{padding:10,height:height*0.9,justifyContent:"center"}}>                    
                    <TextInput 
                        placeholder="Enter your name"
                        underlineColorAndroid='white'
                        style={{margin:10,color:'#00bcd4',backgroundColor:'white',borderRadius:20,borderWidth:1,padding:5,borderColor:'#2c3e50'}}/>
                    <TextInput 
                        placeholder="Enter your address"
                        underlineColorAndroid='white'
                        style={{margin:10,color:'#00bcd4',backgroundColor:'white',borderRadius:20,borderWidth:1,padding:5,borderColor:'#2c3e50'}}/>
                    <TextInput 
                        placeholder="Enter your phone number"
                        underlineColorAndroid='white'
                        style={{margin:10,color:'#00bcd4',backgroundColor:'white',borderRadius:20,borderWidth:1,padding:5,borderColor:'#2c3e50'}}/>
                    <TouchableOpacity style={{margin:10,backgroundColor:'#2c3e50',padding:10,borderRadius:20,borderWidth:1,borderColor:'#2c3e50'}}>
                        <Text style={{color:'white',textAlign:"center"}}>CHANG YOUR INFOMATION</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}

