import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    Dimensions
} from 'react-native';
import toTitleCase from '../../FomatFont/ToTitleCase'
const {height,width}= Dimensions.get('window');

export default class Search extends Component {
    state = {  }
    render() {
        return (
            <View style={{flexDirection:"row",elevation:10,padding:10,backgroundColor:'white',margin:10}}>
                <Image 
                    resizeMode="stretch"
                    style={{height:height/4,width:width/3,}}
                    source={require('../../../temps/dressbluegi.jpg')}/>
                <View style={{padding:5,flex:1,justifyContent: 'space-between',}}>
                    <Text style={{fontSize:20,color:'green',fontWeight:"bold"}}>
                        {toTitleCase('ahhihihi hihi')}
                    </Text>
                    <Text>
                        117$
                    </Text>
                    <Text>
                        Material Silk
                    </Text>
                    <View style={{flexDirection:"row",justifyContent: 'space-between',}}>
                        <Text>Color : Blue</Text> 
                        <View style={{height:height*0.02,width:width*0.03,backgroundColor:'#11abc6',borderRadius:5,margin:5}}/>
                        <Text style={{color:'#df2f33'}}>SHOW DETAILS </Text> 
                    </View>                        
            </View>                   
        </View>

        );
    }
}

