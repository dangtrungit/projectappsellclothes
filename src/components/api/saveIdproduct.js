import {AsyncStorage} from 'react-native'
const saveId  = async(Idproduct) => {
    try {    
        const stringifiedArray = JSON.stringify(Idproduct)
        await AsyncStorage.setItem('@idproduct',stringifiedArray);  
            
    } catch (error) {
        // console.log(error)
    }
}
export default saveId;