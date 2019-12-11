import React from "react";
import {View,Button,StyleSheet,Image, Text,TextInput, KeyboardAvoidingView, ProgressBarAndroid} from "react-native";
import gambar from "./moneyy.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";
import Axios from 'axios';

export default class Utama extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          nip: "",
          error:"",
          loading : false
          
        };
      }
      CekGaji(){
        this.setState({
            loading: true
        });
      const { nip } = this.state;
      Axios.post("http://192.168.43.20:3005/getDataGahjiByNIP",{
      nip
    })
    .then(resp => {
        if(resp.status == 200) {
            //alert(resp.data.kode_jabatan)
            //console.log(resp.data)
            this.props.navigation.navigate("Gaji", {data: resp.data})
            this.setState({
                error:"",
                nip:""
            });
         }
      })
    .catch(error => {
        if(error.response && error.response.status == 503){
            this.setState({
                error:"Data Tidak Ditemukan!"
            });
        }else{
            this.setState({
                error:"Dari Server: " + error
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
                         <Image source={gambar} name="photo" size={75} color="black" style={{ width: 170, height: 170, paddingRight: 5}}/>
                         <Text style={{   
                             marginTop : 20,
                             fontSize: 25,
                             fontWeight: "bold",
                             color:"#2ed573"
                         }}>Ayo Cek Gaji Kamu</Text>
                          {/* <Text style={{  
                             marginTop : 5,
                             fontSize: 15,
                             fontWeight: "bold",
                             color:"#ccc"
                         }}> Hello World!</Text> */}
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
                            
                        </View>
                        <View style={{ 
                            display:"flex",
                            flexDirection:"column",
                            width:"80%",
                            marginTop:20
                         }}>
                              <Text style={{ 
                                 alignItems:"flex-start"
                              }}>Masukkan NIP</Text>
                              <TextInput style={{ 
                                    height : 30,
                                    marginTop:6,
                                    borderColor:"#2ed573",
                                    borderBottomWidth:1
                                }}
                                value={this.state.nip} onChange={e => { this.setState({
                                    nip: e.nativeEvent.text
                                }); }}
                                />
                             {/* <Text style={{ 
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
                                }); }}/> */}
                        </View>
                        {this.state.error != "" && (
                            <Text style={{ color:"red", textAlign: "center"}}>{this.state.error}</Text>
                        )}
                        <TouchableOpacity style={{ 
                                width:"80%",
                                height:50,
                                width:250,
                                marginTop:60,
                                borderRadius:20,
                                backgroundColor:"#2ed573",
                                justifyContent:"center",
                                alignItems:"center",
                             }} onPress={() => {this.CekGaji();}}>
                                 <Text style={{ 
                                     color:"white",
                                     fontWeight:"bold"
                                  }}>Cari</Text>
                             </TouchableOpacity>
                             {/* <Text style={{ 
                                 marginTop:20,
                                 fontSize:15
                              }}>Register</Text> */}
                        
                    </View>
                
                   
                    
                </View>

            </View>
            </KeyboardAvoidingView>
        )
    }
}