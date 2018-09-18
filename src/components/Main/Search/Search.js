import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ListView, TouchableOpacity
} from 'react-native';

import toTitleCase from '../../FomatFont/ToTitleCase'

import global from '../../global'
import RootSearch from './RootSearch';
import RootHome from '../../Main/Home/Home'
import ProductDetail from '../shop/productdetail/ProductDetail'
import styles from '../../styles/Styles'

const { height, width } = Dimensions.get('window');
const uri = `http://192.168.0.100:8888/api/images/product/`

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listproducts: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            ok: false,
            myheight: 500,
            index: 0,
            productnew: ''
        }

    }

    _gotoDetails = (product) => {
        this.setState({ productnew: product })
        global.addProductToCart(product)
        // global.gotoProductDetail(this.state.productnew)


    }

    render() {
        const { products, navigation } = this.props;
        const { listproducts, ok, productnew } = this.state;
        console.log("MY PROODUC NEW ", productnew)
        const listviewJSX = (
            <ListView
                // contentContainerStyle={{ height: height}}
                enableEmptySections
                dataSource={listproducts.cloneWithRows(products)}
                renderRow={productItem => (

                    <View
                        style={{ flexDirection: "row", elevation: 10, padding: 10, backgroundColor: 'white', margin: 10 }}>
                        <Image
                            resizeMode="stretch"
                            style={{ height: height / 4, width: width / 3, }}
                            source={{ uri: `${uri}${productItem.images[0]}` }} />
                        <View style={{ padding: 5, flex: 1, justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 20, color: 'green', fontWeight: "bold" }}>
                                {toTitleCase(productItem.name)}
                            </Text>
                            <Text>
                                {productItem.price}$
                            </Text>
                            <Text>
                                Material  {productItem.material.toUpperCase()}
                            </Text>
                            <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
                                <Text>Color : {productItem.color} </Text>
                                <View style={{ elevation: 10, height: height * 0.02, width: width * 0.03, backgroundColor: productItem.color.toLowerCase(), borderRadius: 5, margin: 5 }} />
                                <TouchableOpacity onPress={() => this._gotoDetails(productItem)}
                                    style={{ justifyContent: "center" }}>
                                    <Text style={{ color: '#df2f33', fontSize: 12, fontWeight: "bold", }}>ORDER</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={{ fontStyle: 'italic',textAlignVertical:'bottom' }}>Description: {productItem.description}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />)
        // const showmorJSX =(
        //     <View>
        //         <Text style={{fontStyle:'italic'}}>Description: {productnew.description}</Text>
        //         <Text style={{fontWeight:"bold"}}>Đặt hàng</Text>
        //     </View>
        // )

        // const viewJSX = ok===false ? listviewJSX : RootJSX ;
        return (
            <View >
                {listviewJSX}

            </View>

        );
    }
}


