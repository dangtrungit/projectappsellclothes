import {AsyncStorage} from 'react-native'
const saveCart  = async(cartArray) => {
    try {
    
        const stringifiedArray = JSON.stringify(cartArray)
        await AsyncStorage.setItem('@datacartarr',stringifiedArray);  
            
    } catch (error) {
        // console.log(error)
    }
}
export default saveCart;