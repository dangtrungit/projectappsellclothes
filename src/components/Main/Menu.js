import React, {Component} from 'react';
import {
    Text,View
    ,TouchableOpacity,
    Button,Image,Dimensions
    ,ScrollView,
} from 'react-native';

import styles from '../styles/Styles';
import global from '../global'
// import Authentication from '../Authentication/Authentication';

// import {
//   createStackNavigator
// } from 'react-navigation';


const { width , height} = Dimensions.get('window');
export default class Menu extends Component {

    // static navigationOptions = {
    
    // };
      constructor(props){
        super(props);
        this.state={
           title:0,
           isLogin : false,
        }  
        global.onSignIn = this._onSignIn.bind(this);  
    
      }

    _onSignIn(){
      this.setState({
        isLogin : true,
        
      })
      
    }
    
    _onPress=() =>{
      console.log("on click")
      this.setState({
        title:this.state.title +1
      })
     
    }
    _gotoAuthen = () =>{
      const { size } = this.props;
    
      this.props.navigation.push('Authentications',{itemId: this.state.title ,otherParam:'data of you'})
    }
    _gotoChangeInfo = () =>{
      this.props.navigation.navigate('Changeinfos',{itemId: this.state.title ,otherParam:'data of you'})
    }
    _gotoOrderHistory = () =>{
      this.props.navigation.navigate('OrderHistorys',{itemId: this.state.title ,otherParam:'data of you'})
    }

    _onLogin=()=>{
      this.setState({
        isLogin:true,
      })
    }
    _onLogout=()=>{
      this.setState({
        isLogin:false,
      })
    }
    
    
    render() {
      const logoutJSX =(
        <TouchableOpacity 
            onPress={this._gotoAuthen}
            style={{marginTop:10,height:height*0.1,width:width/2,borderColor:'#008090'
            ,borderRadius:10,elevation:3,justifyContent:"center",borderWidth:2}}>
            
            <Text 
              style={{color:'#008090',fontSize:15,fontWeight:'bold',textAlign:"center"}}>Sign In</Text>
        </TouchableOpacity>
      );

      const loginJSX = (
        <View>         

          <TouchableOpacity 
                onPress={this._gotoOrderHistory}
                style={{marginTop:10,height:height*0.1,width:width/2,borderColor:'#008090'
                ,borderRadius:10,elevation:3,justifyContent:"center",borderWidth:2}}>
              
                <Text 
                  style={{color:'#008090',fontSize:15,fontWeight:'bold',textAlign:"center"}}>Order History</Text>
          </TouchableOpacity>

           <TouchableOpacity 
                onPress={this._gotoChangeInfo}
                style={{marginTop:10,height:height*0.1,width:width/2,borderColor:'#008090'
                ,borderRadius:10,elevation:3,justifyContent:"center",borderWidth:2}}>
                <Text 
                  style={{color:'#008090',fontSize:15,fontWeight:'bold',textAlign:"center"}}>Change Info</Text>
          </TouchableOpacity>

          <TouchableOpacity 
                onPress={this._onLogout}
                style={{marginTop:10,height:height*0.1,width:width/2,borderColor:'#008090'
                ,borderRadius:10,elevation:3,justifyContent:"center",borderWidth:2}}>
              
                <Text 
                  style={{color:'#008090',fontSize:15,fontWeight:'bold',textAlign:"center"}}>Sign out</Text>
          </TouchableOpacity>
      
        </View>
    );
      const mainJSX = this.state.isLogin ? loginJSX : logoutJSX;
      return (
        <ScrollView>
          <View style={styles.container}>
          <Image 
              style={styles.imageaccount}
              source= {require('../../images/icons8-administrator-male-512.png')}/>
              <Text style={{color:'#008090',fontWeight:'bold'}}>DANG TRUNG</Text>
              {mainJSX}
           
        
          <Text style={styles.welcome}>
              Welcome to App Sale!
             </Text>
              <TouchableOpacity onPress={this._onPress}>
             <Text style={styles.instructions}>
              {this.state.title} 
              </Text>
             </TouchableOpacity>
             {/* <MyHello name1 = {this.state.title} /> */}
             {/* <ListviewA /> */}
    
          </View>
        </ScrollView>
        );
      }
    }
    // export default createStackNavigator(
    //   {      
    //     Menus: Menu,
    //     Authentications: Authentication,
    //   },
    //   {
    //     initialRouteName: 'Menus',
      
    // });
  