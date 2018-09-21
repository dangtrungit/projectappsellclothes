import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    ListView,
    RefreshControl,
    Alert
} from 'react-native';
import getListProduct from '../../../api/getListProduct'
import toTitleCase from '../../../FomatFont/ToTitleCase'
const { width, height } = Dimensions.get('window')
const uri = `http://192.168.0.101:8888/api/images/product/`

export default class ListProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listproducts: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            refreshing: false,
            page: 1,
            titlename: ''
        }
        this.arr = [];
    }

    componentWillMount(){
        const { navigation } = this.props;
        const titleName = navigation.getParam('titlename', 'NOT NAME');
        
        this.setState({titlename:titleName})

    }

    componentDidMount() {
        const { navigation } = this.props;
        const typeId = navigation.getParam('typeId', 'key-id');
        const { page } = this.state;

        getListProduct(typeId, page).then(arrProduct => {
            this.arr = arrProduct;
            this.setState({
                listproducts: this.state.listproducts.cloneWithRows(this.arr),
                page: page + 1
            })
        }
        )
    }
    _onRefresh = () => {
        const { navigation } = this.props;
        const { page } = this.state;
        const typeId = navigation.getParam('typeId', 'NO ID');
       

        this.setState({ refreshing: true, page: (page + 1) });
        getListProduct(typeId, page).then(arrProduct => {
            this.arr = arrProduct.concat(this.arr);

            this.setState({
                listproducts: this.state.listproducts.cloneWithRows(this.arr),
                refreshing: false
            })

        }).catch(err => {
            this.setState({

                refreshing: false
            })
            Alert.alert(
                'Notice',
                'Dữ liệu đã được tải hết!',
                [
                    { text: 'OK', }
                ],
                { cancelable: false })
        })
    }

    _gotoDetails = (product) => {
        const { navigation } = this.props;
        navigation.navigate('Details', {
            productkey: product,
        })
    }

    _goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View
                style={{ padding: 5, marginBottom: 40, }}>
                <View style={{ flexDirection: 'row', backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: 'grey', padding: 10 }}>
                    <TouchableOpacity onPress={this._goBack}>
                        <Image
                            style={{ tintColor: '#2c3e50' }}
                            source={require('../../../../images/icons8-back-24.png')} />
                    </TouchableOpacity>

                    <Text style={{ textAlign: "center", color: '#2c3e50', flex: 1, fontSize: 18, fontWeight: "bold" }}>
                        {this.state.titlename}
                    </Text>
                </View>
                <ListView

                    enableEmptySections
                    // contentContainerStyle={styles.body}
                    dataSource={this.state.listproducts}
                    renderRow={product => (

                        <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: 'grey', padding: 10, backgroundColor: 'white', justifyContent: 'space-between' }}>
                            <Image
                                resizeMode="stretch"
                                style={{ height: height / 4, width: width / 3, }}
                                source={{ uri: `${uri}${product.images[0]}` }} />
                            <View style={{ padding: 5, flex: 1, justifyContent: 'space-between', }}>
                                <Text style={{ fontSize: 20, color: '#2c3e50', fontWeight: "bold" }}>
                                    {toTitleCase(product.name)}
                                </Text>
                                <Text>
                                    Price : {product.price}
                                </Text>
                                <Text>
                                    Material : {product.material}
                                </Text>
                                <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
                                    <Text>Color : {product.color}</Text>
                                    <View style={{ elevation: 10, height: height * 0.02, width: width * 0.03, backgroundColor: product.color.toLowerCase(), borderRadius: 5, margin: 5 }} />
                                    <TouchableOpacity
                                        onPress={() => this._gotoDetails(product)}
                                        style={{ justifyContent: "center", }}>
                                        <Text style={{ color: '#df2f33', fontWeight: "bold", fontSize: 11 }}>SHOW DETAILS</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                />


            </View>
        );
    }
}