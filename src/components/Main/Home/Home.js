import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Button,

} from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';
import ProductDetail from '../shop/productdetail/ProductDetail';
import ListProduct from '../shop/listproduct/ListProduct';
import global from '../../global'
// import Cart from '../Cart/Cart'

import { createStackNavigator } from 'react-navigation';


 export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            types: [],
            products: []
        };
        // this.arrnull=null;
        global.gotoProductDetail = this._gotoProductDetail.bind(this);
        
    }

    componentDidMount() {

        fetch('http://192.168.0.101:8888/api/')
            .then((response) => response.json())
            .then((resJson) => {

                const { type, product } = resJson
                this.setState({
                    types: type,
                    products: product
                })
            });
    }

    _gotoProductDetail = (product) => {
        
      
        this.arrnull = product;
        // const { navigate } = this.props;
         this.props.navigation.push('Details', {
            productkey: this.arrnull
        })
    }

    _gotoListProduct() {
        this.props.navigation.navigate('ListProducts')
    }

    render() {
        const { types, products } = this.state;
        const { navigate } = this.props.navigation;
        const { navigation } = this.props;
       
        
        

        return (
            <ScrollView >
                <Collection
                   navigate={navigate} />
                <Category
                    types={types}
                    navigate={navigate}
                />
                <TopProduct
                    navigate={navigate}
                    products={products} />
            </ScrollView>
        );
    }
}

 const RootHome = createStackNavigator({
    Home: Home,
    
    Details: ProductDetail,
    ListProducts: ListProduct,
},
    {
        initialRouteName: 'Home',
        headerMode: 'none',

    });
    export default RootHome;