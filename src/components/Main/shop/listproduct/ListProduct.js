import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
 } from 'react-native';

 const { width , height}  = Dimensions.get('window')

export default class ListProduct extends Component{

    _goBack=()=>{
        this.props.navigation.goBack();
    }

    render(){
        return(
            <ScrollView>
                <View
                    style={{padding:5}}>
                    <View style={{flexDirection:'row',backgroundColor:'white',borderBottomWidth:1,borderBottomColor:'grey',padding:10}}>
                       <TouchableOpacity onPress={this._goBack}>
                            <Image 
                                style={{tintColor:'#2c3e50'}}
                                source ={require('../../../../images/icons8-back-24.png')}/>
                       </TouchableOpacity>
                        
                        <Text style={{textAlign:"center",color:'#2c3e50',flex:1,fontSize:18,fontWeight:"bold"}}>
                            Festival Dress
                        </Text>
                    </View>

                    <View style={{flexDirection:"row",borderBottomWidth:1,borderBottomColor:'grey',padding:10,backgroundColor:'white',justifyContent: 'space-between'}}>
                        <Image 
                            resizeMode="stretch"
                            style={{height:height/4,width:width/3,}}
                            source={require('../../../../temps/dressbluegi.jpg')}/>
                        <View style={{padding:5,flex:1,justifyContent: 'space-between',}}>
                            <Text style={{fontSize:20,color:'green',fontWeight:"bold"}}>
                                Name Dress Blue
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

                    {/* -------- */}

                    <View style={{flexDirection:"row",borderBottomWidth:1,borderBottomColor:'grey',padding:10,backgroundColor:'white',justifyContent: 'space-between'}}>
                        <Image 
                            resizeMode="stretch"
                            style={{height:height/4,width:width/3,}}
                            source={require('../../../../temps/dressbluegi.jpg')}/>
                        <View style={{padding:5,flex:1,justifyContent: 'space-between',}}>
                            <Text style={{fontSize:20,color:'green',fontWeight:"bold"}}>
                                Name Dress Blue
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

                    {/* -------- */}

                    <View style={{flexDirection:"row",borderBottomWidth:1,borderBottomColor:'grey',padding:10,backgroundColor:'white',justifyContent: 'space-between'}}>
                    <Image 
                        resizeMode="stretch"
                        style={{height:height/4,width:width/3,}}
                        source={require('../../../../temps/dressbluegi.jpg')}/>
                    <View style={{padding:5,flex:1,justifyContent: 'space-between',}}>
                        <Text style={{fontSize:20,color:'green',fontWeight:"bold"}}>
                            Name Dress Blue
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
               
                </View>
        
            </ScrollView>
          );
    }
}