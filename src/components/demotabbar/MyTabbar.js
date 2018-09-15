import React,{Component} from 'react';
import {
    View,
    Text,
    Image,

} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class MyTabbar extends Component{

    constructor(props){
        super(props);
        this.state={
            selectedTab:'home'
        }

    }

    _home = () => {
        this.setState({ selectedTab: 'home' });
    }
    _shop = () => {
        this.setState({ selectedTab: 'shop' });
    }
    render(){
        return(
         <TabNavigator
         tabBarShadowStyle = {{backgroundColor:'green'}}
         style ={{borderRadius:10}}
         
         >
            <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                title="Home"
                onPress={this._home}
                badgeText ="1"
                
                renderIcon={() => 
                <Image
                    style ={{width:30,height:30}}
                    source={require('../../images/icons8-house-64.png')} />}
                renderSelectedIcon={() =>
                <Image
                    style ={{width:30,height:30,}}
                    source={require('../../images/icons8-house-64.png')} />}
                >

                <View style ={{flex:1,backgroundColor:'red'}}>
                </View>
        
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'shop'}
                title="Shop"
                onPress={this._shop}
                renderIcon={() => 
                    <Image
                        style ={{width:30,height:30}}
                        source={require('../../images/icons8-shop-50.png')} />}
                    renderSelectedIcon={() =>
                     <Image
                        style ={{width:30,height:30}}
                        source={require('../../images/icons8-shop-50.png')} />}
                >
                <View style ={{flex:1,backgroundColor:'yellow'}}>
                </View>        
            </TabNavigator.Item>
         </TabNavigator>
        );
    }
}