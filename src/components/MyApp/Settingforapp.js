
import {
  Platform,
  
} from 'react-native';
import {
  createStackNavigator
} from 'react-navigation';


import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Hello My App Sale',
});

import Authentication from '../authentication/Authentication';
import Changeinfo from '../changeinfo/Changeinfo';
import OrderHistory from '../OrderHistory/OrderHistory';
import ProductDetail from '../Main/shop/productdetail/ProductDetail';

import Menu from '../Main/Menu';
// import Main from '../Main/';

  const RootStack = createStackNavigator(
    
    {
      Menus: Menu,
      Authentications: Authentication,
      Changeinfos: Changeinfo,
      OrderHistorys: OrderHistory,
      ProductDetails: ProductDetail,
    },
    {
      initialRouteName: 'Menus',
      headerMode: 'none',
    }
  );
  export default RootStack;

  

