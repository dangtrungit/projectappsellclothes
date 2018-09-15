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

import Cart from '../Cart/Cart'

import { createStackNavigator } from 'react-navigation';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            types: [],
            products: []
        };

    }

    componentDidMount() {

        fetch('http://192.168.1.4:8888/api/')
            .then((response) => response.json())
            .then((resJson) => {

                // console.log(resJson)
                const { type, product } = resJson
                this.setState({
                    types: type,
                    products: product
                })
            });
    }

    _gotoProductDetail = () => {
        // const { navigate } = this.props;
        this.props.navigation.navigate('Details')
    }

    _gotoListProduct() {

        this.props.navigation.navigate('ListProducts')
    }

    render() {
        const { types, products } = this.state;
        const { navigate } = this.props.navigation;

        return (
            <ScrollView >
                <Collection
                    gotoDetails={this._gotoProductDetail} />
                <Category
                    types={types}
                    gotoListProduct={this._gotoListProduct} />
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