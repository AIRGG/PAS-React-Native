import React from "react";
import {View,Button,StyleSheet,Image, Text,TextInput, KeyboardAvoidingView, ProgressBarAndroid} from "react-native";
import gambar from "./icon-register-user.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import Axios from 'axios';
export default class loginGG extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          username: "",
          password:"",
          error:"",
          loading : false
          
        };
      }
      login(){
        this.setState({
            loading: true
        });
      const { username, password} = this.state;
      Axios.post("http://192.168.43.230:7100/login",{
      username,
      password
    })
    .then(resp => {
        if(resp.status == 200) {
            this.props.navigation.navigate("Utama", {userdata: resp.data})
         }
      })
    .catch(error => {
        if(error.response && error.response.status == 503){
            this.setState({
                error:"user tidak ditemukan!"
            });
        }else{
            this.setState({
                error:"Server Error" + error
            });
        }
    }).finally( () =>{
        this.setState({
            loading: false
        });
    });

  }
    render(){
        return (
            <KeyboardAvoidingView behavior="padding" enabled>
            <View style={{  
                height :"100%",
                flexDirection :"column",
                alignItems:"center",
                justifyContent:"center"
            }}
            >
                <View style={{  
                    display:"flex",
                    flexDirection:"row",
                    flex:1
                }}>
                    <View style={{ 
                        display:"flex",
                        flexDirection:"column",
                        flex:1,
                        alignItems:"center",
                        justifyContent:"center"
                     }}>
                         <Image source={gambar} name="photo" size={75} color="black" style={{ width: 105, height: 105, paddingRight: 5}}/>
                         <Text style={{   
                             marginTop : 20,
                             fontSize: 25,
                             fontWeight: "bold",
                             color:"#2ed573"
                         }}> Welcome to The Game</Text>
                          <Text style={{  
                             marginTop : 5,
                             fontSize: 15,
                             fontWeight: "bold",
                             color:"#ccc"
                         }}> Hello World!</Text>
                    </View>
                </View>
                <View style={{  
                    display:"flex",
                    flexDirection:"row",
                    flex:1,
                    height:100
                }}>
                    <View style= {{
                        display:"flex",
                        flexDirection:"column",
                        flex:1,
                        alignItems:"center"
                    }}>
                        <View style={{ 
                            display:"flex",
                            flexDirection:"column",
                            width:"80%"
                         }}>
                             <Text style={{ 
                                 alignItems:"flex-start"
                              }}>Username</Text>
                              <TextInput style={{ 
                                    height : 30,
                                    marginTop:6,
                                    borderColor:"#2ed573",
                                    borderBottomWidth:1
                                }}
                                value={this.state.username} onChange={e => { this.setState({
                                    username: e.nativeEvent.text
                                }); }}
                                />
                        </View>
                        <View style={{ 
                            display:"flex",
                            flexDirection:"column",
                            width:"80%",
                            marginTop:28
                         }}>
                             <Text style={{ 
                                 alignItems:"flex-start"
                              }}>Password</Text>
                              <TextInput style={{ 
                                    height : 30,
                                    marginTop:6,
                                    borderColor:"#2ed573",
                                    borderBottomWidth:1
                                }}
                                value={this.state.password} onChange={e => { this.setState({
                                    password: e.nativeEvent.text
                                }); }}/>
                        </View>
                        {this.state.error != "" && (
                            <Text style={{ color:"red", textAlign: "center"}}>{this.state.error}</Text>
                        )}
                        <TouchableOpacity style={{ 
                                width:"80%",
                                height:50,
                                width:250,
                                marginTop:40,
                                borderRadius:20,
                                backgroundColor:"#2ed573",
                                justifyContent:"center",
                                alignItems:"center",
                             }} onPress={() => {this.login();}}>
                                 <Text style={{ 
                                     color:"white",
                                     fontWeight:"bold"
                                  }}>Login</Text>
                             </TouchableOpacity>
                             <Text style={{ 
                                 marginTop:20,
                                 fontSize:15
                              }}>Register</Text>
                        
                    </View>
                
                   
                    
                </View>

            </View>
            </KeyboardAvoidingView>
        )
    }
}