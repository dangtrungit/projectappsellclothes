import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get('window');
import MapView, { Marker } from 'react-native-maps';
export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: 21.569361,
            longitude: 105.468300,
            isInfo: false
        }

    }


    _gotoInfo = () => {
        this.setState({
            isInfo: true
        })

    }
    render() {
        const { latitude, longitude, isInfo } = this.state;
        const InfoJSX = (
            <View>
                <Text>Version : 1.0</Text>
                <Text style={{ textAlign: 'left' }}>
                    Cửa hàng thời trang nữ với những bộ váy đầm đẹp, chất lượng, được cung cấp
                    bởi những nhà thiết kế thời trang nổi tiếng,...Mua hàng trên MyShop luôn là một trải nghiệm ấn tượng. Dù bạn đang có nhu cầu mua bất kỳ mặt hàng thời trang nam, thời trang nữ, đồng hồ, điện thoại hay sản phẩm dành cho Mẹ và bé thì MyShop cũng sẽ đảm bảo cung cấp cho bạn những sản phẩm ưng ý. Bên cạnh đó, MyShop cũng có sự tham gia của các thương hiệu hàng đầu thế giới ở đa dạng nhiều lĩnh vực khác nhau. Trong đó có thể kể đến Samsung, OPPO, Xiaomi, Unilever, P&G, Biti’s...Các thương hiệu này hiện cũng đã có cửa hàng chính thức trên MyShop Mall với hàng trăm mặt hàng chính hãng, được cập nhập liên tục. Là một kênh bán hàng uy tín, MyShop luôn cam kết mang lại cho khách hàng những trải nghiệm mua sắm online giá rẻ, an toàn và tin cậy. Mọi thông tin về người bán và người mua đều được bảo mật tuyệt đối. Các hoạt động giao dịch thanh toán tại Shopee luôn được đảm bảo diễn ra nhanh chóng, an toàn. Một vấn đề nữa khiến cho các khách hàng luôn quan tâm đó chính là mua hàng trên MyShop có đảm bảo không. MyShop luôn cam kết mọi sản phẩm trên MyShop, đặc biệt là Shopee Mall đều là những sản phẩm chính hãng, đầy đủ tem nhãn, bảo hành từ nhà bán hàng.
                </Text>
            </View>
        )
        const viewJSX = (
            <View style={{ justifyContent: 'space-between', padding: 10, flex: 1 }}>
                <View style={{ elevation: 10, padding: 10, backgroundColor: 'white' }}>
                    <MapView
                        rotateEnabled
                        zoomControlEnabled
                        provider="google"
                        style={{ height: height / 3, width: width - 40 }}
                        region={{
                            latitude: latitude,
                            longitude: longitude,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    >

                        <Marker
                            coordinate={{ longitude: longitude, latitude: latitude }}
                            title="MY SHOP"
                            description="Shop Clothes by Dang Trung"
                        />
                    </MapView>


                </View>
                <View style={{ elevation: 10, padding: 10, backgroundColor: 'white' }}>
                    <View style={{ padding: 10, borderBottomWidth: 1, flexDirection: "row", justifyContent: 'space-between' }}>
                        <Image
                            source={require('../../../images/icons8-location-24.png')} />
                        <Text
                            style={{ color: "#00bcd4" }}>
                            Thiện Kế - Sơn Dương - Tuyên Quang
                    </Text>
                    </View>

                    <View style={{ padding: 10, borderBottomWidth: 1, flexDirection: "row", justifyContent: 'space-between' }}>
                        <Image
                            source={require('../../../images/icons8-phone-24.png')} />
                        <Text
                            style={{ color: "#00bcd4" }}>
                            (+84) 978225676
                    </Text>
                    </View>

                    <View style={{ padding: 10, borderBottomWidth: 1, flexDirection: "row", justifyContent: 'space-between' }}>
                        <Image
                            source={require('../../../images/icons8-gmail-24.png')} />
                        <Text
                            style={{ color: "#00bcd4" }}>
                            myshop@gmail.com
                    </Text>
                    </View>


                    <TouchableOpacity
                        style={{ padding: 10, flexDirection: "row", justifyContent: 'space-between' }}
                        onPress={this._gotoInfo}>
                        <Image
                            source={require('../../../images/icons8-about-24.png')} />
                        <Text
                            style={{ color: "#00bcd4" }}>
                            About Us
                    </Text>
                    </TouchableOpacity>

                </View>
            </View>
        )

        const mainJSX = isInfo ? InfoJSX : viewJSX
        return (
            <View style={{ flex: 1 }}>
                {mainJSX}
            </View>

        );
    }
}

