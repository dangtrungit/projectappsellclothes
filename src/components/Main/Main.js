import React, {Component} from 'react';
import {
    Text,View
    ,TouchableOpacity,
} from 'react-native';
import styles from '../styles/Styles';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop';
import App2 from '../MyApp/App2';
import Settingforapp from '../MyApp/Settingforapp';
// import RouterStack from './Home/Router';

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            title:0,
            hello :'ahello',
            ahuu:'dddd',
            sizeOffset:100,
         }
        
    }
    _onPress = () =>{
         this.setState({
            ahuu :this.state.hello,
             });
        //  console.log(ahuu);
    }

    closeControlPanel = () => {
        this.drawer.close()
      };
    openControlPanel = () => {
        this.drawer.open()
      };

    render(){
        // const { navigation } = this.props;
        
        return(
        
            <View style={{flex:1}}>
               
                <Drawer
                    tapToClose={true}
                    panCloseMask={0.2}
                    openDrawerOffset={0}
                    ref={(ref) => {this.drawer = ref}}
                    openDrawerOffset={this.state.sizeOffset}
                    content={<App2 />}
                >       
                
                <Shop                 
                    open ={this.openControlPanel}/>
      </Drawer>

            </View>
        
       
            // <View style = {styles.container}>
            //     <Text onPress={this._onPress}>
            //     Wow
            //     {this.state.ahuu}
                  
            //     </Text>
            // </View>
        );

    }
}