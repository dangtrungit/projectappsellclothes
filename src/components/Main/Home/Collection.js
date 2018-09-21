import React, { Component } from 'react';
import { View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
 } from 'react-native';

import styles from '../../styles/Styles'

import getImageCollection from '../../api/getImageCollection'
const uri = 'http://192.168.0.101:8888/api/images/product/'
const { width, height } = Dimensions.get('window');
export default class Collection extends Component{

    constructor(props){
        super(props);
        this.state={
            image:null,

        }


    }

    componentDidMount(){
        getImageCollection()
        .then(res=> this.setState({
            image: res[0].images[0],
        }))
       
    }

    
    _gotoListProduct = () => {
        const { navigate } = this.props;
        navigate('ListProducts',{
            typeId : 'COLLECTION',
            titlename:'SPRING COLLECTION'})
    }


    render(){
    
        return(
            <TouchableOpacity 
                onPress={this._gotoListProduct}             
                style= {styles.wrapper}>
             <View style={{flex:1}}>
                <Text               
                    style={{color:'black',fontWeight:'bold'}}>
                    SPRING COLLECTION
                </Text>
             </View>                
                <View style={{flex:5}}>
                    <Image 
                        resizeMode="cover"
                        style={styles.imagecustom2}
                        source={{uri: `${uri}${this.state.image}`}}/>
                </View>
               
            </TouchableOpacity>
        );
    }
}
// 760 x 500


