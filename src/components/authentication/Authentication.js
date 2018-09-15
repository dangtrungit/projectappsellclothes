import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    Dimensions,
    TouchableOpacity,
    Image,
    TextInput,
} from 'react-native';
import styles from '../styles/Styles';
const { height,width } = Dimensions.get('window');
class Authentication extends Component {
    // static navigationOptions = {
    //     title: 'Authentication',
            
    //   };

    constructor(props){
        super(props);
        this.state ={
          isSignIn :true,
        }

    }

    _onSignIn = () =>{
      this.setState({
        isSignIn:true,
      })
    }

    _onSignUp =()=>{
      this.setState({
        isSignIn:false,
      })
    }

    _onBack=() =>{
       this.props.navigation.goBack();
      }
    


    render() {      
        const { navigation  } = this.props;
        const otherParam = navigation.getParam('otherParam');
        const itemId = navigation.getParam('itemId');
        const SignIn = (
          <View style={{flex:1,width:width*0.7,}}>
                  <TextInput  
                    placeholder="Enter your Email" 
                    placeholderTextColor="grey"              
                    underlineColorAndroid='white'
                    // keyboardType="numeric"
               
                    style={{color:'#00bcd4',backgroundColor:'white',borderRadius:10,padding:5,marginTop:50}}>

                  </TextInput>
                  <TextInput  
                    placeholder="Enter your Password" 
                    placeholderTextColor="grey"              
                    underlineColorAndroid='white'
                    keyboardType="default"
                    secureTextEntry={true}               
                    style={{color:'#00bcd4',backgroundColor:'white',borderRadius:10,padding:5,marginTop:10}}>

                  </TextInput>
                  <TouchableOpacity style={{borderRadius:10,borderWidth:1,marginTop:10,borderColor:'white'}}>
                     <Text style={{color:'#00bcd4',padding:10,textAlign:"center"}}>Sign In Now</Text>
                  </TouchableOpacity>
          </View>
        );


        const SignUp = (
          <View style={{flex:1,width:width*0.7,}}>
            <TextInput  
              placeholder="Enter your name" 
              placeholderTextColor="grey"              
              underlineColorAndroid='white'        
              style={{color:'#00bcd4',backgroundColor:'white',borderRadius:10,padding:5,marginTop:50}}>

            </TextInput>
            <TextInput  
              placeholder="Enter your email" 
              placeholderTextColor="grey"              
              underlineColorAndroid='white'      
              style={{color:'#00bcd4',backgroundColor:'white',borderRadius:10,padding:5,marginTop:10}}>

            </TextInput>
            <TextInput  
              placeholder="Enter your password" 
              placeholderTextColor="grey"              
              underlineColorAndroid='white'
              keyboardType="default"
              secureTextEntry={true}        
              style={{color:'#00bcd4',backgroundColor:'white',borderRadius:10,padding:5,marginTop:10}}>

            </TextInput>
            <TextInput  
              placeholder="Re-enter your password" 
              placeholderTextColor="grey"              
              underlineColorAndroid='white'
              keyboardType="default"
              secureTextEntry={true}        
              style={{color:'#00bcd4',backgroundColor:'white',borderRadius:10,padding:5,marginTop:10}}>

            </TextInput>
            <TouchableOpacity style={{borderRadius:10,borderWidth:1,marginTop:10,borderColor:'white'}}>
              <Text style={{color:'#00bcd4',padding:10,textAlign:"center"}}>Sign Up Now</Text>
            </TouchableOpacity>
        </View>
        );

        const { isSignIn }= this.state;
        const mainJSX = isSignIn ? SignIn : SignUp;
        
        return (
          <View            
                style={{flexDirection:"column", flex:1, backgroundColor:'#2c3e50',padding:10,justifyContent:"center",alignItems:"center"}}>
                <View  style={{flexDirection:"row",marginTop:10}}>
                <TouchableOpacity onPress= {this._onBack}>
                    <Image
                                                  
                        style={{height:20,width:20,tintColor:'#00bcd4'}}
                        source={require('../../images/icons8-back-24.png')} 
                    />
                </TouchableOpacity>
                    
                    <Text                     
                    style={{flex:1,color:'#80deea',textAlign:"center",fontSize:18}}>Wearing a Dress</Text>
                   
                    <Image 
                        style={{height:20,width:20}}
                        source={require('../../images/icons8-clothes-48.png')} />
                </View>
                {mainJSX}

                <View style={{flexDirection:"row",width:width*0.7}}>
                  <TouchableOpacity 
                      onPress = {this._onSignIn}
                      style={styles.isStyleButtonSignin}>
                     <Text style={isSignIn ? styles.activityStyle : styles.inactivityStyle}>Sign In</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                      style={styles.isStyleButtonSignup}
                      onPress = {this._onSignUp}>
                     <Text style={!isSignIn ? styles.activityStyle : styles.inactivityStyle}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
                          
           </View>
         
        );
      }
}

export default Authentication;