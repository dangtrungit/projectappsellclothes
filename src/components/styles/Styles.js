
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const imageWidth = width- 20;
const tonglayout = height/3-10;
const imageH = (tonglayout*5)/6;

const styles = StyleSheet.create({

  activityStyle:{color:'#00bcd4',padding:10,textAlign:"center"},
  inactivityStyle:{color:'grey',padding:10,textAlign:"center"},

  isStyleButtonSignin:{
    backgroundColor:'white',
    marginRight:2,
    flex:1,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    borderWidth:1,
    marginTop:10,
    borderColor:'white'
  },
  isStyleButtonSignup:{
    backgroundColor:'white',
    flex:1,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    borderColor:'white',
    borderWidth:1,
    marginTop:10
  },

  imageaccount:{
    height:width/2,
    width: width/2,

  },

  viewcontainercustom:{
    margin:5,
    padding:5,
    backgroundColor:'white',
    elevation:5,
    borderRadius:5
    // justifyContent:"space-around
  },

  imagecustom1:{
    // justifyContent:"space-around",
    height:height/3,
    width: (width-60)/2,
  },

  body:{
    flexDirection:'row',
    justifyContent:'space-around',
    flexWrap:'wrap'

  },
  viewcustom:{
    zIndex: -1,
    position: 'absolute',
    height:imageH,
    width: imageWidth,
    
   
  },

  imagecustom2:{
    height:imageH,
    width: imageWidth,
  },
  wrapper:{ 
    padding:5,
    height: height / 3,
    backgroundColor:'#FFF',
    margin:5,
    shadowColor:'grey',
    elevation:5, 
    shadowOffset:{width:0,height:3},
    shadowOpacity:0.5,
    // justifyContent:'center',
    // alignItems:'center'

  },

  imagecustom:{
    width:50,
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  countdown:{
    backgroundColor:'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
    textcustom:{
      fontWeight: 'bold',
      textAlign: 'center',
      color:'pink'
    },
    touchableopacitycustom:{
      padding:20,
      width:200,
      backgroundColor:'green',
      borderWidth:1,
      borderColor:'yellow',
      margin:5,
      borderRadius:10,
    },
    container: {
     
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d8f4ff',
      
    },
    welcome: {
      fontSize: 18,
      textAlign: 'center',
      margin: 10,
      fontWeight:'bold'
    },
    instructions: {
      textAlign: 'center',
      color: '#2695e6',
      marginBottom: 5,
    },
  });

export default styles;
  