import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import ProductDetail from '../shop/productdetail/ProductDetail';

const RouterStack = StackNavigator({
        ActivityHome :{
            screen: Home
        },

        ActivityProductDetail: {
            screen: ProductDetail
        }
 })
 export default RouterStack;