import {
    AsyncStorage
  } from 'react-native'
  
  const getIdproduct = async () => {
    const idproduct = await AsyncStorage.getItem('@idproduct');
    if(idproduct!=null){
        // console.log(idproduct)
      return JSON.parse (idproduct);
    }else{
      try {
        if (cartArray == null) {
          alert("Error! You dont have Data")
        }
        
      } catch (error) {
        // console.log("we dont hva data")
      } finally {
        return [];
      }
    }
   
  
  }
  export default getIdproduct;