import React, {Component} from 'react';
import {
    Text,View
    ,TouchableOpacity,
} from 'react-native';
import styles from '../styles/Styles';
import Drawer from 'react-native-drawer';
export default class MyDrawer extends Component{
    constructor(props){
        super(props);
        this.state={
            title:0,
            hello :'ahello',
            ahuu:'dddd'
         }
        
        this._onPress=this._onPress.bind(this)
    }
    _onPress = () =>{
         this.setState({
            ahuu :this.state.hello,
             });
       
    }

    closeControlPanel = () => {
        this._drawer.close()
      };
    openControlPanel = () => {
        this._drawer.open()
      };

    render(){
        return(
        <Drawer
        tapToClose={true}
        panCloseMask={0.2}
        openDrawerOffset={0.2}

        ref={(ref) => this._drawer = ref}
        openDrawerOffset={100}
        content={
        <View style={{flex:1,backgroundColor:'yellow'}} >
            <TouchableOpacity onPress={this.closeControlPanel}>
                <Text>CLOSE</Text>
            </TouchableOpacity>
        </View>
        }
        >
        <Text onPress = {this._onPress}>
       
        {this.state.ahuu}
        </Text>
        <View style={{flex:1,backgroundColor:'red'}} >
        
            <TouchableOpacity onPress={this.openControlPanel}>
                <Text >OPEN</Text>
            </TouchableOpacity>
        </View>
      </Drawer>
            // <View style = {styles.container}>
            //     <Text onPress={this._onPress}>
            //     Wow
            //     {this.state.ahuu}
                  
            //     </Text>
            // </View>
        );

    }
}