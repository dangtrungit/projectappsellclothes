import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    TouchableOpacity
} from 'react-native';
import styles from '../../styles/Styles'
const uri = 'http://192.168.1.4:8888/api/images/product/'

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export default class TopProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
        }

    }

    _gotoDDD = (product) => {
        const { navigate } = this.props;
        navigate('Details', {
            productkey: product,

        })
    }


    render() {
        const { products } = this.props;


        return (

            <View style={{ padding: 5, margin: 5, backgroundColor: 'white', elevation: 5, }}>
                <Text style={{ color: 'black', fontWeight: 'bold', padding: 10 }}>
                    TOP PRODUCT
               </Text>

                <ListView
                    enableEmptySections
                    contentContainerStyle={styles.body}
                    dataSource={this.state.dataSource.cloneWithRows(products)}
                    renderRow={product => (
                        <TouchableOpacity
                            onPress={() => this._gotoDDD(product)}
                            style={styles.viewcontainercustom} >
                            <Image
                                resizeMode="stretch"
                                style={styles.imagecustom1}
                                source={{ uri: `${uri}${product.images[0]}` }} />
                            <Text >{product.name.toUpperCase()}</Text>
                            <Text style={{ fontWeight: "bold" }}>{product.price} $</Text>
                        </TouchableOpacity>
                    )}

                />
            </View>

        );
    }
}
{/* <View style={styles.body}>
{products.map((product, index, products) => {
    // const arr = this.props.product

    return (
        <TouchableOpacity
            onPress={() => this._gotoDDD(product)}
            style={styles.viewcontainercustom} key={index}>
            <Image
                resizeMode="stretch"
                style={styles.imagecustom1}
                source={{ uri: `${uri}${product.images[0]}` }} />
            <Text >{toTitleCase(product.name)}</Text>
            <Text >{product.price}</Text>
        </TouchableOpacity>
    )

})}
</View> */}