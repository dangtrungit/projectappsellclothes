import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    
} from 'react-native';
    import styles from '../styles/Styles';
    import CountDown from 'react-native-countdown-component';


export default class MyJWT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 3,
            show: false            
         };
         }

    _onShow = () => {
      this.setState({
            show:true,
         images:require('../../images/icons8-shop-50.png'),
        });
     }
    componentDidMount(){
        this.interval = setInterval(
          () => this.setState({timer: --this.state.timer}),
          1000
        );
      }
      
      componentDidUpdate(){
        if(this.state.timer === 0){
          clearInterval(this.interval);        
        }
      }

    render() {
    return (
     <View style={{ backgroundColor: 'white' }}>
        {/* <CountDown
        digitBgColor='white'
        // digitTxtColor= 'white'
        timeTxtColor='white'
        // style={styles.countdown}
        until={3}
        onPress={() => alert('hello')}
        size={40}
        timeToShow={['M', 'S']} 
        /> */}

      <Image 
      style={styles.imagecustom}
      source={this.state.images}
      />
     
      <Text> {this.state.timer} </Text>
    </View>
   
        );
    }
}
