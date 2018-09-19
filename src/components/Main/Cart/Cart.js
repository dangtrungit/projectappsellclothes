import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    ListView

} from 'react-native';
const uri = 'http://192.168.0.101:8888/api/images/product/'
const { height, width } = Dimensions.get('window');
import global from '../../../components/global'
import toTitleCase from '../../FomatFont/ToTitleCase'
import sendOrder from '../../api/sendOrder'
import getToken from '../../api/getToken'




export default class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            price: ''
        }
    }

    async _sendOrder() {
        const { cartArray } = this.props;
        try {
            const token = await getToken();
            const arrayDetail = cartArray.map(value => ({
                id: value.product.id,
                quantity: value.quantity
            //  a : console.log("MT QUANTITY",value.quantity),
            }));
            const result = sendOrder(token,arrayDetail)
            // console.log(" RES", result)
            result ? console.log(" Sucesss") :console.log(" fail")
        } catch (error) {
            console.log("MyEoorrrr", error)
        }
    }

    _incrQuantity = (id) => {
        global.incrQuantity(id)
    }

    _decrQuantity = (id) => {

        global.decrQuantity(id)
    }

    _removeProduct = (id) => {
        global.removeProduct(id)
    }
    render() {
        const { cartArray } = this.props;

        const arrTotal = cartArray.map(e => {
            if (e.quantity > -1 && e.quantity != null) {
                return (e.product.price * e.quantity)
            } else {
                return (e.quantity = 0)
            }
        });

        const total = arrTotal.reduce((a, b) => (a + b), 0);

        return (
            <View style={{ padding: 5, justifyContent: 'flex-end' }} >
                <ListView
                    enableEmptySections
                    contentContainerStyle={{ backgroundColor: 'white' }}
                    dataSource={this.state.dataSource.cloneWithRows(cartArray)}
                    renderRow={cartItem => (

                        <View
                            style={{ flexDirection: "row", backgroundColor: 'white', padding: 10, elevation: 10, marginBottom: 10 }}>
                            <Image
                                resizeMode='stretch'
                                style={{ height: height / 4, width: width / 3, }}
                                source={{ uri: `${uri}${cartItem.product.images[0]}` }} />

                            <View style={{ justifyContent: 'space-between', flex: 1, marginLeft: 10 }}>
                                <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
                                    <Text style={{ fontWeight: "bold", color: '#167285', fontSize: 18, }}>{toTitleCase(cartItem.product.name)}</Text>
                                    <TouchableOpacity onPress={() => this._removeProduct(cartItem.product.id)}>
                                        <Text style={{ color: 'black', fontSize: 15, }}>x</Text>
                                    </TouchableOpacity>

                                </View>
                                <Text style={{ color: 'red' }}>{cartItem.product.price}$</Text>
                                <View style={{ flexDirection: "row", justifyContent: 'space-between', alignContent: "space-between" }}>
                                    <TouchableOpacity
                                        style={{ backgroundColor: '#167285', borderRadius: 10, flex: 1 }}
                                        onPress={() => this._incrQuantity(cartItem.product.id)}>
                                        <Text style={{ color: 'black', textAlign: "center" }}>+</Text>
                                    </TouchableOpacity>

                                    <Text style={{ color: 'black', textAlign: "center", flex: 1 }}>{cartItem.quantity}</Text>
                                    <TouchableOpacity
                                        style={{ backgroundColor: '#167285', borderRadius: 10, flex: 1 }}
                                        onPress={() => this._decrQuantity(cartItem.product.id)}>
                                        <Text style={{ color: 'black', textAlign: "center" }}>-</Text>
                                    </TouchableOpacity >
                                    <Text style={{ color: 'red', fontWeight: 'bold' }}>Promotional Code</Text>

                                </View>
                            </View>
                        </View>
                    )}

                />
                <TouchableOpacity
                    onPress={() => this._sendOrder()}
                    style={{ backgroundColor: '#167285', padding: 10, elevation: 10, }}>
                    <Text style={{ color: 'white', textAlign: "center", fontWeight: "bold" }}>
                        TOTAL {total}$ CHECKOUT NOW
                    </Text>
                </TouchableOpacity>
            </View>


        );
    }
}

