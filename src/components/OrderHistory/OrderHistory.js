import React, { Component } from 'react';
import {
    Text, View,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    RefreshControl

} from 'react-native';

import getOrderHistory from '../api/getOrderHistory'
import getToken from '../api/getToken'

const { height, width } = Dimensions.get('window')

export default class OrderHistory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrOrders: [],
            refreshing: false,
            isOpenDetail: false,
        };
        // this.arrOrders = [];
    }


    componentDidMount() {

        getToken()
            .then(token => getOrderHistory(token))
            .then(orders => (this.setState({
                arrOrders: orders
            }))
            )
            .catch(err => console.log(err));
    }
    _onRefresh = () => {
        getToken()
            .then(token => getOrderHistory(token))
            .then(orders => (this.setState({
                arrOrders: orders,

            })
            ))
            .catch(err => console.log(err));
        // this.setState({ refreshing: false })
    }

    _onDeatail = () => {
        this.setState({ isOpenDetail: true })

    }

    _goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        // console.log("MY ARRRAAA", this.state.arrOrders)
        const { arrOrders } = this.state;
        console.log("MY ARRRAAA", arrOrders)
        

        const detailJSX = (
            <View style={{borderTopWidth:1,paddingTop:5}}>
                
                <Text>DETAIL</Text>
            </View>
        )

        const isdetailJSX = this.state.isOpenDetail ? detailJSX : null;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ padding: 10, flexDirection: "row", backgroundColor: '#2c3e50', alignContent: "center", justifyContent: "center" }}>
                    <Text style={{ color: 'white', }}>Order History</Text>
                    <TouchableOpacity
                        style={{ justifyContent: 'center', left: width * 0.2 }}
                        onPress={this._goBack}>
                        <Image
                            source={require('../../images/icons8-more-than-24.png')} />
                    </TouchableOpacity>

                </View>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />

                    }>
                    {
                        arrOrders.map((valueOrder, index, arrOrders) => {
                            return (
                                <View
                                    key={index}
                                    style={{ padding: 5, backgroundColor: 'white', margin: 5, borderRadius: 5, elevation: 10 }}>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                        <Text>Order id:</Text>
                                        <Text style={{ color: "green" }}>
                                            ODR {valueOrder.id}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                        <Text>OrderTime:</Text>
                                        <Text style={{ color: "#be2e55" }}>
                                            {valueOrder.date_order}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                        <Text>Status:</Text>
                                        <Text style={{ color: "green" }}>
                                            Complete
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                        <Text>Total:</Text>
                                        <Text style={{ color: '#be2e55' }}>
                                            {valueOrder.total}
                                            $</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                                        {/* <TouchableOpacity
                                        key={index}
                                            onPress={this._onDeatail}
                                            style={{ backgroundColor: '#2c3e50', padding: 5, elevation: 10, borderRadius: 5 }}>
                                            <Text style={{ color: 'white', fontSize: 11, fontWeight: "bold" }}>SHOW DETAIL</Text>
                                        </TouchableOpacity> */}
                                    </View>
                                    {/* {isdetailJSX } */}

                                </View>

                            );
                        })
                    }
                </ScrollView>
            </View >



        );
    }

}

