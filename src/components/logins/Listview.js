// import React, { Component } from 'react';
// import {

//     View,
//     Text,
//     ListView,
//     Image,
//     RefreshControl,
//     Alert,
//     TextInput
    
// } from 'react-native';

// import styles from '../styles/Styles';
// import { YellowBox } from 'react-native';
// YellowBox.ignoreWarnings(['Remote debugger']);


//  export default class ListviewA extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             pagenumber:0,
//             refreshing:false,
//             dataSource : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
//             pagecurrent : 0,
//             NAME: '' ,
//              USERNAME: '' ,
//              PASSWORD: '' ,
//              result: '....',
            
//         }
       
//     //    this._onEndReached = this._onEndReached.bind(this);
//     //    this._postDataDemo = this._postDataDemo.bind(this);


//     }
//     _renderRow(data){
//         return(<Text>{data}</Text>);
//     }
    // registry
    // _postDataDemo(){
    //     // let num01 = this.state.num1;
    //     // let num02 = this.state.num2;
    //     // let resultnew =  eval(num01+ '+' +num02)
   
    //     fetch("https://sellclothess.000webhostapp.com/Service/registryuser.php",{
    //         method:"POST",
    //         headers:{
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             NAME:this.state.NAME,
    //             USERNAME:this.state.USERNAME,
    //             PASSWORD:this.state.PASSWORD,
    //         })
    //     })
    //     .then((response)=>response.json())
    //     .then((responseJson)=>{
    //          this.setState({
    //             result:responseJson.kq_id,
    //         })
    //         console.log("------------------" +responseJson.kq_id)
    //     })
    //     .catch((error)=>{
    //         // console.log(error)
    //     });  

    // }

    // loadnewData(){
    //     // refreshing
    //     // this.setState({
    //     //     refreshing:  true  
    //     // })
    //     // var arr = ['111','222','3333']
    //     fetch("https://dangtrungit.000webhostapp.com/Server/tatcadanhsachbaihat.php?pagenum="+(this.state.pagenumber+1))
    //     .then((response)=> response.json())
    //     .then((responseJson)=>{
    //         console.log(responseJson);
    //         if (responseJson.length !== 0) {
    //             this.setState({
    //                 dataSource: this.state.dataSource.cloneWithRows(responseJson),
    //                 refreshing : false,
    //                 pagenumber:this.state.pagenumber+1,
                          
    //             })
    //         } else {
    //            Alert.alert(
    //                 'THONG BAO',
    //                 'Đã hết dữ liệu!',
    //                 [
    //                 //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    //                 //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //                   {text: 'OK', onPress: () => console.log('OK Pressed')},
    //                 ],
    //                 { cancelable: false, }
    //               )
    //         }
           
    //     })
    //     .catch((error)=> {
    //         console.log(error);
    //     });
       
    //     // this.setState({
    //     //     dataSource: this.state.dataSource.cloneWithRows(arr)
    //     // })

    // }

    // _onEndReachedLoadMore = () =>{
    //     fetch("https://dangtrungit.000webhostapp.com/Server/tatcadanhsachbaihat.php?pagenum="+ (this.state.pagenumber+1))
    //     .then((response)=> response.json())
    //     .then((responseJson)=>{
    //         console.log(responseJson);
     
    //         if(responseJson.length !=0){
    //             mang = mang.concat(responseJson)
    //             this.setState({
    //                 dataSource: this.state.dataSource.cloneWithRows(mang),
    //                 pagenumber:this.state.pagenumber+1
                    
    //             });
                
    //         }
    //         if(responseJson.length == 0){
    //             console.log('??????');
    //                Alert.alert(
    //                 'THONG BAO',
    //                 'Đã hết dữ liệu!',
    //                 [
    //                 //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    //                 //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //                   {text: 'OK', onPress: () => console.log('OK Pressed')},
    //                 ],
    //                 { cancelable: false }
    //               )
    //         }
           
    //     })
    //     .catch((error)=> {
    //         // console.log(error);
    //     });
    // }

    // render(){
    //     return(
           
            // <View style= {{flex:1}}>
                    
             {/* <ListView
                // key= {it.IdBaiHat} 
                onEndReached={this._onEndReachedLoadMore}
                onEndReachedThreshold={5}
            
                // refreshControl={
                //     <RefreshControl
                //     refreshing={this.state.refreshing}
                //     onRefresh={this.loadnewData.bind(this)}
                //     />
                // }
                dataSource={this.state.dataSource}
                renderRow={(rowdata) => 
                 
                <View style={{padding:10,borderWidth:1}}>
             
                <Image 

                 style= {{width:70,height:70,borderRadius:10}}
                source ={{uri: rowdata.HinhBaiHat}}/>
                
                 
                <Text>{rowdata.IdBaiHat}</Text>
                 <Text>{rowdata.TenBaiHat}</Text>
                <Text>{rowdata.CaSi}</Text>
        
             </View>
             }
            /> */}
          {/* <TextInput
                    {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                    editable = {true}
                 maxLength = {40}
            /> */}
              {/* <TextInput
                 style = {
                     {height:40,width:100,borderWidth:0}
                 }
                 onChangeText={(NAME) => this.setState({NAME})}
                 placeholder="NAME"
                 />
                 <TextInput
                 style = {
                     {height:40,width:100,borderWidth:0}
                 }
                 onChangeText={(USERNAME) => this.setState({USERNAME})}
                 placeholder="USER NAME"
                 />
                  <TextInput
                 style = {
                     {height:40,width:100,borderWidth:0}}
                     onChangeText={(PASSWORD) => this.setState({PASSWORD})}
                     placeholder="PASWORD"
                  
                     
                    />

                <Text style = {styles.welcome}

                    onPress={this._postDataDemo}> DANG KY </Text>
                   
                <Text style = {styles.welcome}
                
                     >{this.state.result} </Text> 
               </View>
        );

    } */}

    // componentDidMount(){
    //     // var arr = ['111','222','3333']

    //     fetch("https://dangtrungit.000webhostapp.com/Server/tatcadanhsachbaihat.php?pagenum="+this.state.pagenumber)
    //     .then((response)=> response.json())
    //     .then((responseJson)=>{
    //         console.log(responseJson);
    //         mang = responseJson;
    //         this.setState({
    //             dataSource: this.state.dataSource.cloneWithRows(mang)
               
    //         })
    //     })
    //     .catch((error)=> {
    //         console.log(error);
    //     });
    //     // this.setState({
    //     //     dataSource: this.state.dataSource.cloneWithRows(arr)
    //     // })
    // }

// }

