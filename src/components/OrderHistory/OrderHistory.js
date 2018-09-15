import React, {Component} from 'react';
import {
    Text,View,
    Image,
    Dimensions,
    
} from 'react-native';

const {  height, width   } = Dimensions.get('window')

 class OrderHistory extends Component {
    
    render() {
        return (
            <View>
                <View style={{padding:10,flexDirection:"row",backgroundColor:'#2c3e50',alignContent:"center",justifyContent:"center"}}>
                    <Text style={{color:'white',}}>Order History</Text>
                    <Image                        
                        style={{tintColor:'#00bcd4',left:width*0.2}}
                        source={require('../../images/icons8-more-than-24.png')}/>
                </View>
                <View style= {{padding:5,backgroundColor:'white',margin:5,borderRadius:5,elevation:10}}>
                    <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text>Order id:</Text>
                        <Text style={{color:"green"}}>ORD 001</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text>OrderTime:</Text>
                        <Text style={{color:"#be2e55"}}>10-09-2018 13:22:00</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text>Status:</Text>
                        <Text style={{color:"green"}}>Pending</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text>Total:</Text>
                        <Text style={{color:'#be2e55'}}>100$</Text>
                    </View>
                    
                </View>
                <View style= {{padding:5,backgroundColor:'white',margin:5,borderRadius:5,elevation:10}}>
                    <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text>Order id:</Text>
                        <Text style={{color:"green"}}>ORD 001</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text>OrderTime:</Text>
                        <Text style={{color:"#be2e55"}}>10-09-2018 13:22:00</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text>Status:</Text>
                        <Text style={{color:"green"}}>Pending</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text>Total:</Text>
                        <Text style={{color:'#be2e55'}}>100$</Text>
                    </View>
                    
                </View>
                <View style= {{padding:5,backgroundColor:'white',margin:5,borderRadius:5,elevation:10}}>
                    <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text>Order id:</Text>
                        <Text style={{color:"green"}}>ORD 001</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text>OrderTime:</Text>
                        <Text style={{color:"#be2e55"}}>10-09-2018 13:22:00</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text>Status:</Text>
                        <Text style={{color:"green"}}>Pending</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text>Total:</Text>
                        <Text style={{color:'#be2e55'}}>100$</Text>
                    </View>
                    
                </View>
                <View style= {{padding:5,backgroundColor:'white',margin:5,borderRadius:5,elevation:10}}>
                    <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text>Order id:</Text>
                        <Text style={{color:"green"}}>ORD 001</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text>OrderTime:</Text>
                        <Text style={{color:"#be2e55"}}>10-09-2018 13:22:00</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text>Status:</Text>
                        <Text style={{color:"green"}}>Pending</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text>Total:</Text>
                        <Text style={{color:'#be2e55'}}>100$</Text>
                    </View>
                    
                </View>
                
            </View>
        );
    }
}
export default OrderHistory;
