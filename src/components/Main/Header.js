import React, { Component } from 'react';
import { View,Text,TextInput,Image,Dimensions
    ,TouchableOpacity ,
 } from 'react-native';
const { height } = Dimensions.get('window');
export default class Header extends Component {

    constructor(props){
        super(props);       
        this.state = {
            ima : require('../../images/round_menu_white_24dp.png')
        }
    }

    _OnOpen = () =>{
        this.setState({
            ima:require('../../images/round_arrow_back_white_24dp.png'),   
        });

    }
    
    
    render() {
        return (
            <View            
                style={{flexDirection:"column", height: height/7, backgroundColor:'#2c3e50',padding:10}}>
                <View  style={{flexDirection:"row",flex:1,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress= {this.props.onOpen}>
                    <Image                          
                        style={{height:20,width:20,tintColor:'#00bcd4'}}
                        source={this.state.ima} 
                    />
                </TouchableOpacity>
                    
                    <Text     
                        onPress={this._gotoProductDetail}                
                        style={{flex:1,color:'#80deea',textAlign:"center"}}>Wearing a Dress</Text>
                   
                    <Image 
                        style={{height:20,width:20}}
                        source={require('../../images/icons8-clothes-48.png')} />
                </View>

                <View  
                 style={{flexDirection:"row",flex:1}}>
                <TextInput                 
                    underlineColorAndroid='white'
                    style={{color:'#00bcd4',flex:1,backgroundColor:'white',borderRadius:10,padding:5}}/>
                </View>
                          
           </View>
        );
    }
}

