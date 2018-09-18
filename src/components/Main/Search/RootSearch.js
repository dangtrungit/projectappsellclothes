import Search from './Search'
import ProductDetail from '../shop/productdetail/ProductDetail'
import { createStackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {
    View,
    Text,
    
} from 'react-native';
import global from '../../global'
class DOM extends Component{

    constructor(props) {
        super(props);
        this.state = {
           
        };
        this.arrnull=null;
        // global.gotoProductDetail = this._gotoProductDetail.bind(this);

    }

    _gotoProductDetails = (product) => {
      
        this.arrnull = product;
        // const { navigate } = this.props;
        this.props.navigation.push('Details', {
            productkey: this.arrnull
        })
    }
    render(){
        const { navigation } = this.props;
        const { navigate } = this.props.navigation;
        return(
            <View>
               <ProductDetail navigation={navigation} 
               />
            </View>
        )
    }

}
const RootSearch = createStackNavigator({
    doms:DOM,
    Details: ProductDetail,
    
},
    {
        initialRouteName: 'doms',
        headerMode: 'none',

    });
export default RootSearch;