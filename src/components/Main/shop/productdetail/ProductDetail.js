import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../../styles/Styles'
import global from '../../../global'
const { height, width } = Dimensions.get('window')
const uri = 'http://192.168.0.100:8888/api/images/product/'

export default class ProductDetail extends Component {
    constructor(props) {
        super(props);
    }

    addProductToCart = (product) => {
        global.addProductToCart(product)
    }

    _goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        const { navigation,productnew } = this.props;
        // const { productnew,  } = this.props;
        // console.log("MY PROODUC NEW ",productnew)
        const product = navigation.getParam('productkey', 'ERROR KEY');
        // const view1JSX = (
        //     <View style={{ margin: 10, backgroundColor: 'white', padding: 10, elevation: 10, flex: 1 }}>
        //         <View style={{ flexDirection: "row", justifyContent: 'space-between', margin: 5 }}>
        //             <TouchableOpacity onPress={this._goBack}>
        //                 <Image
        //                     style={{ tintColor: '#0a5767' }}
        //                     source={require('../../../../images/icons8-back-24.png')}
        //                 />
        //             </TouchableOpacity>
        //             <TouchableOpacity onPress={() => this.addProductToCart(productnew)} >
        //                 <Image
        //                     style={{ tintColor: '#0a5767' }}
        //                     source={require('../../../../images/icons8-shopping-cart-24-color.png')}
        //                 />
        //             </TouchableOpacity>
        //         </View>
        //         <View style={styles.body}>
        //             {
        //                 productnew.images.map((images, index, productnew) => {
        //                     return (
        //                         <View key={index}
        //                             style={styles.viewcontainercustom}>
        //                             <Image
        //                                 resizeMode='stretch'
        //                                 style={{ height: height * 0.25, width: width * 0.30 }}
        //                                 source={{ uri: `${uri}${images}` }} />
        //                         </View>

        //                     );

        //                 })
        //             }

        //         </View >
        //         <Text style={{ textAlign: "center", padding: 10, fontSize: 18, fontWeight: "bold", color: '#0a5767' }}>{(productnew.name).toUpperCase() + ` / ` + productnew.price}$</Text>
        //         <Text style={{ padding: 10, color: '#0a5767' }}>{productnew.description}</Text>
        //         <View style={{ justifyContent: 'space-between', flexDirection: "row", padding: 10, }}>
        //             <Text style={{ color: '#0a5767', fontWeight: "bold" }}>Material :  {productnew.material}</Text>
        //             <Text style={{ elevation: 10, color: '#0a5767', fontStyle: 'italic' }}>
        //                 Color : {productnew.color}
        //             </Text>
        //             <View style={{ elevation: 10, backgroundColor: productnew.color.toLowerCase(), height: 20, width: 20, borderRadius: 10, justifyContent: "center" }} />

        //         </View>
        //     </View>
        // )
        const view2JSX = (
            <View style={{ margin: 10, backgroundColor: 'white', padding: 10, elevation: 10, flex: 1 }}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', margin: 5 }}>
                    <TouchableOpacity onPress={this._goBack}>
                        <Image
                            style={{ tintColor: '#0a5767' }}
                            source={require('../../../../images/icons8-back-24.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.addProductToCart(product)} >
                        <Image
                            style={{ tintColor: '#0a5767' }}
                            source={require('../../../../images/icons8-shopping-cart-24-color.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    {
                        product.images.map((images, index, product) => {

                            return (
                                <View key={index}
                                    style={styles.viewcontainercustom}>
                                    <Image
                                        resizeMode='stretch'
                                        style={{ height: height * 0.25, width: width * 0.30 }}
                                        source={{ uri: `${uri}${images}` }} />
                                </View>

                            );

                        })
                    }

                </View >
                <Text style={{ textAlign: "center", padding: 10, fontSize: 18, fontWeight: "bold", color: '#0a5767' }}>{(product.name).toUpperCase() + ` / ` + product.price}$</Text>
                <Text style={{ padding: 10, color: '#0a5767' }}>{product.description}</Text>
                <View style={{ justifyContent: 'space-between', flexDirection: "row", padding: 10, }}>
                    <Text style={{ color: '#0a5767', fontWeight: "bold" }}>Material :  {product.material}</Text>
                    <Text style={{ elevation: 10, color: '#0a5767', fontStyle: 'italic' }}>
                        Color : {product.color}
                    </Text>
                    <View style={{ elevation: 10, backgroundColor: product.color.toLowerCase(), height: 20, width: 20, borderRadius: 10, justifyContent: "center" }} />

                </View>
            </View>

        )
        // const productnew1 = product ? view2JSX :   view1JSX;

        return (
            <View style={{flex:1}}>
                {view2JSX}
            </View>

        );
    }
}