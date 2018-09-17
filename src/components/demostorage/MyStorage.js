import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    AsyncStorage ,

} from 'react-native';
import styles from '../styles/Styles';

export default class MyStorage extends Component{
    constructor(props){
        super(props);
        this.state={
           
        }

       
    }

    _save = async() =>{
        // console.log("START")
        try {
            // console.log("SAVE OK!"),
            await AsyncStorage.setItem('key','Em gai mua');
            
           
        } catch (error) {
            // console.log(error)
        }
      
    }
    _get = async () => {
        
        try {
          const value = await AsyncStorage.getItem('key');
         
          if (value !== null) {
            // We have data!!
            console.log(value + value1);
          }
         } catch (error) {
           // Error retrieving data
         }
        }

    render(){
        return(
            <View style = {styles.container}> 

                <Text style={{color:'red'}}>
                    Hello :))
                </Text>
                <Text style={{color:'blue'}}>
                    Hi! Trung!
                </Text>
                <TouchableOpacity 
                    style = {styles.touchableopacitycustom}
                    onPress={this._save}>
                    <Text style= {styles.textcustom}>SAVE</Text>

                </TouchableOpacity>
                <TouchableOpacity 
                    style = {styles.touchableopacitycustom}
                    onPress={this._get}>
                    <Text style= {styles.textcustom}>GET {this.state.result}</Text>
                </TouchableOpacity>
            </View>
        );
    }

}