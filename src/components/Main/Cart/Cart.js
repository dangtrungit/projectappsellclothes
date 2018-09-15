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
const uri = 'http://192.168.1.4:8888/api/images/product/'
const { height, width } = Dimensions.get('window');
import global from '../../../components/global'


function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export default class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            price: ''
        }
    }

    _incrQuantity = (id) =>{
        global.incrQuantity(id)
    }

    _decrQuantity = (id) =>{
     
        global.decrQuantity(id)
    }

    _removeProduct=(id)=>{
        global.removeProduct(id)
    }
    render() {
        const { cartArray } =  this.props; 
        
        const arrTotal = cartArray.map(e =>
            {  if(e.quantity>-1 && e.quantity != null){
                   return(e.product.price * e.quantity) 

                }else{
                    return(e.quantity =0) 
                }
            } );
       
        const total = arrTotal.reduce((a,b) => (a+b),0);
     
        return (
            <View style={{ padding: 5,justifyContent:'flex-end'  }} >
                <ListView
                    enableEmptySections
                    contentContainerStyle={{backgroundColor:'white'}}
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
                                    <Text style={{ color: 'black', fontSize: 18, }}>{toTitleCase(cartItem.product.name)}</Text>
                                    <TouchableOpacity onPress={()=>this._removeProduct(cartItem.product.id)}>
                                        <Text style={{ color: 'black', fontSize: 15, }}>x</Text>
                                    </TouchableOpacity>
                                    
                                </View>
                                <Text style={{ color: 'red' }}>{cartItem.product.price}$</Text>
                                <View style={{ flexDirection: "row", justifyContent: 'space-between', alignContent: "space-between" }}>
                                    <TouchableOpacity
                                        style={{backgroundColor:'#167285', borderRadius:10,flex:1}} 
                                        onPress= {()=>this._incrQuantity(cartItem.product.id)}>
                                        <Text style={{ color: 'black', textAlign: "center" }}>+</Text>
                                    </TouchableOpacity>
                                    
                                    <Text style={{ color: 'black', textAlign: "center" ,flex:1}}>{cartItem.quantity}</Text>
                                    <TouchableOpacity
                                    style={{backgroundColor:'#167285', borderRadius:10,flex:1}}  
                                    onPress= {()=>this._decrQuantity(cartItem.product.id)}>
                                        <Text style={{ color: 'black', textAlign: "center" }}>-</Text>
                                    </TouchableOpacity>
                                    
                                    <Text style={{ color: 'red', textAlign: "center" }}>SHOW DETAILS</Text>

                                </View>
                            </View>
                        </View>
                    )}

                />
                <TouchableOpacity
                    style={{ backgroundColor: '#167285', padding: 10, elevation: 10,}}>
                    <Text style={{ color: 'white', textAlign: "center", fontWeight: "bold" }}>
                        TOTAL {total}$ CHECKOUT NOW
                    </Text>
                </TouchableOpacity>
            </View>


        );
    }
}

