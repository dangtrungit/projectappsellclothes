import {
  AsyncStorage
} from 'react-native'

const getCart = async () => {
  const cartArray = await AsyncStorage.getItem('@datacartarr');
  if(cartArray!=null){
    return JSON.parse (cartArray);
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
export default getCart;