import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,

} from 'react-native';

import styles from '../../styles/Styles'
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');
const uri = 'http://192.168.0.101:8888/api/images/type/'
export default class Category extends Component {


    _gotoListProduct = (typeid) => {
       
        const { navigate } = this.props;
        navigate('ListProducts',{typeId : typeid})
    }

    render() {
        const { types, } = this.props;

        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 1 }}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>
                        LIST OF CATEGORY
                    </Text>
                </View>
                <View style={{ flex: 5 }}>
                    <Swiper
                        autoplay={true}
                        style={styles.imagecustom2}>
                        {
                            types.map((type, index, types) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        flex: 1, justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                    onPress={()=> this._gotoListProduct(type.id)}>
                                    <Text style={{ color: 'black' }}>{type.name}</Text>
                                    <Image
                                        resizeMode="stretch"
                                        style={styles.viewcustom}
                                        source={{ uri: `${uri}${type.image}` }}
                                    />
                                </TouchableOpacity>
                            );
                        })

                        }


                    </Swiper>

                </View>
            </View>
        );
    }
}


