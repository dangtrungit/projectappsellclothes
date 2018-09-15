import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    TextInput,Alert

} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import RootHome from './Home/Home';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Search from './Search/Search';

import styles from '../styles/Styles';
import Header from './Header';
import initData from '../api/initData'
import saveCart from '../api/saveCart'
import getCart from '../api/getCart'
import saveIdproduct from '../api/saveIdproduct'
import getIdproduct from '../api/getIdproduct'
import global from '../global'



const { height } = Dimensions.get('screen');
export default class Shop extends Component{

    constructor(props){
        super(props);
        this.state={
            selectedTab:'home',
            cartArray: [],
            types: [],
            products: [],
            
        }
        global.addProductToCart = this._addProductToCart.bind(this);  
        global.incrQuantity = this._incrQuantity.bind(this); 
        global.decrQuantity = this._decrQuantity.bind(this); 
        global.removeProduct = this._removeProduct.bind(this); 


    }

    componentDidMount() {
        initData().then(resJson => {
                // console.log(resJson)
                const { type, product } = resJson
                this.setState({
                    types: type,
                    products: product
                })
            });
            getCart().then(cartArray => this.setState({
                cartArray
            }))
            getIdproduct().then(id => this.setState({
                id:this.state.id
            }))
    }


    _addProductToCart= (product) =>{    
        let cartarr= this.state.cartArray.concat({product,quantity: 1})            
        this.setState(
                { 
                    cartArray : Array.from(new Set(cartarr.map(JSON.stringify))).map(JSON.parse),
                },
                () =>saveCart(this.state.cartArray)
            );  
        }

    _incrQuantity(productId){
        const newCart =this.state.cartArray.map(e => {
            if(e.product.id !== productId) return e;
            return { product :  e.product,quantity:e.quantity+1}
        })
        // const index = this.state.cartArray.findIndex(e=>e.product.id === productId)
        this.setState({
            cartArray: newCart
        },
        ()=>saveCart(this.state.cartArray)
        )
    }

    _decrQuantity(productId){
        const newCart =this.state.cartArray.map(e => {
            // (console.log(e))
            if(e.product.id !== productId){
                return e;
            } else{
                return { 
                    product :  e.product,              
                    quantity: e.quantity-1 ,                        
                }
                    
            }
    
        })
        // const index = this.state.cartArray.findIndex(e=>e.product.id === productId)
        this.setState({
            cartArray: newCart
        },()=>saveCart(this.state.cartArray)
        )
    }

    _removeProduct =(productId) =>{
        const newCart =this.state.cartArray.filter(e => e.product.id !== productId);
            // const index = this.state.cartArray.findIndex(e=>e.product.id === productId)
        this.setState({
            cartArray: newCart
        },
        ()=>saveCart(this.state.cartArray)
        )
    }

    _home = () => {
        this.setState({ selectedTab: 'home' });
    }
    _cart = () => {
        this.setState({ selectedTab: 'cart' });
    }

    _search = () => {
        this.setState({ selectedTab: 'search' });
    }
    _contact = () => {
        this.setState({ selectedTab: 'contact' });
    }

    _openMenu = () => {
        console.log('opennnnne')
        const { open } = this.props;
        open();
    }
    render(){
        const { cartArray} =this.state;
        return(
            <View style= {{flex:1}}>
                <Header onOpen={this._openMenu}/>
                  
                  <TabNavigator
                    tabBarShadowStyle = {{backgroundColor:'green'}}
                    style ={{borderRadius:10}}
                    >
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        selectedTitleStyle={{color:"#00bcd4"}}
                        onPress={this._home}
                        renderIcon={() => 
                        <Image
                            // style ={{width:20,height:20}}
                            source={require('../../images/icons8-home-page-24.png')} />}
                        renderSelectedIcon={() =>
                        <Image
                            // style ={{width:20,height:20,}}
                            source={require('../../images/icons8-home-page-24-color.png')} />}
                        >
                        <RootHome/>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        onPress={this._cart}
                        badgeText ={cartArray.length}
                        renderIcon={() => 
                            <Image
                            source={require('../../images/icons8-shopping-cart-24.png')} />}
                            renderSelectedIcon={() =>
                            <Image
                             source={require('../../images/icons8-shopping-cart-24-color.png')} />}
                        >
                        <Cart cartArray={cartArray} 
                       />      
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        onPress={this._search}
                        renderIcon={() => 
                            <Image                             
                                source={require('../../images/icons8-search-24.png')} />}
                            renderSelectedIcon={() =>
                            <Image                                
                                source={require('../../images/icons8-search-24-color.png')} />}
                        >
                        <Search/>     
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        onPress={this._contact}
                        renderIcon={() => 
                            <Image                             
                                source={require('../../images/icons8-contacts-24.png')} />}
                        renderSelectedIcon={() =>
                             <Image                                
                                source={require('../../images/icons8-contacts-24-color.png')} />}
                        >
                        <Contact/>     
                    </TabNavigator.Item>
                    </TabNavigator>

        </View>
       
        );
    }
}