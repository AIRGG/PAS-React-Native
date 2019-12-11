import React from "react";
import {View,Button,StyleSheet,Image, Text,TextInput, KeyboardAvoidingView, ProgressBarAndroid} from "react-native";
// import gambar from "./icon/-register-user.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import Axios from 'axios';

export default class Gaji extends React.Component{
    render(){
        const dt = this.props.navigation.getParam("data")[0];
        return(
            <View style={{  
                height :"100%",
                flexDirection :"column",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <View style={{  
                    display:"flex",
                    flexDirection:"row",
                    flex:1,
                    padding:50
                    // backgroundColor:"yellow"
                }}>
                    <Text style={{
                        fontSize:25
                    }}>Gaji Kamu</Text>
                </View>
                <View style={{  
                    display:"flex",
                    flexDirection:"row",
                    flex:2
                    // backgroundColor:"red"
                }}>
                    <View style={{  
                        display:"flex",
                        flexDirection:"row",
                        marginRight:160
                    }}>
                        <View style={{  
                            display:"flex",
                            flexDirection:"column"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:20
                            }}>Nama: {dt.nama}</Text>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:20
                            }}>Jabatan: {dt.jabatan}</Text>
                        </View> 
                        
                    </View>
                    <View style={{  
                        display:"flex",
                        flexDirection:"row",
                    }}>
                        <Text></Text>
                    </View>
                </View>

                

                <View style={{  
                    display:"flex",
                    flexDirection:"row",
                    flex:7
                    // backgroundColor:"red"
                }}>
                    <View style={{  
                        display:"flex",
                        flexDirection:"row"
                    }}>
                        <View style={{  
                            display:"flex",
                            flexDirection:"column",
                            width:180
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13
                            }}>Rincian Gaji</Text>
                            <Text style={{
                                fontSize:14
                            }}>Gaji Pokok</Text>
                            <Text style={{
                                fontSize:14
                            }}>Status</Text>
                            <Text style={{
                                fontSize:14
                            }}>Jumlah Anak</Text>
                            <Text style={{
                                fontSize:14
                            }}>Jumlah Tunjangan</Text>
                            <Text style={{
                                fontSize:14
                            }}>Lembur ({dt.tunjanganlemburjbtn})</Text>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:16
                            }}>Total</Text>
                        </View> 
                        <View style={{  
                            display:"flex",
                            flexDirection:"column"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13
                            }}></Text>
                            <Text style={{
                                fontSize:14
                            }}>: {dt.gajipokok}</Text>
                            <Text style={{
                                fontSize:14
                            }}>: {(dt.status == "1")? "Menikah":"Belum Menikah"}</Text>
                            <Text style={{
                                fontSize:14
                            }}>: {dt.jml_anak}</Text>
                            <Text style={{
                                fontSize:14
                            }}>: {(dt.gajipokok*0.15)*dt.jml_anak}</Text>
                            <Text style={{
                                fontSize:14
                            }}>: ({dt.jam_lembur}) {dt.jam_lembur*dt.tunjanganlemburjbtn}</Text>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:16
                            }}>: {dt.gajipokok+((dt.gajipokok*0.15)*dt.jml_anak)+dt.jam_lembur*dt.tunjanganlemburjbtn}</Text>
                        </View> 
                        
                    </View>
                    <View style={{  
                        display:"flex",
                        flexDirection:"row",
                    }}>
                        <Text></Text>
                    </View>
                </View>
                <View style={{
                    display:"flex",
                    flexDirection:"row",
                    paddingBottom: 30
                }}>
                    <TouchableOpacity style={{ 
                                width:"80%",
                                height:50,
                                width:250,
                                marginTop:40,
                                borderRadius:20,
                                backgroundColor:"#ff4757",
                                justifyContent:"center",
                                alignItems:"center",
                             }} onPress={() => {
                                //console.log(this.props)
                                this.props.navigation.navigate("Home");
                                }}>
                                 <Text style={{ 
                                     color:"white",
                                     fontWeight:"bold"
                                  }}>Kembali</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}