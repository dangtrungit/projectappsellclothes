import {
    AsyncStorage
  } from 'react-native'
  
  const getToken = async () => {
    const value = await AsyncStorage.getItem('@token');
    if(value!=null){
      return value ;
    }else{
      try {
        if (value == null) {
          // console.log("Error! You dont have Data")
        }
        
      } catch (error) {
        // console.log("we dont hva data")
      } finally {
        return [];
      }
    }
   
  
  }
  export default getToken;