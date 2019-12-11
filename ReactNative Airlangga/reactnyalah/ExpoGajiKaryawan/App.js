import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import foto from "./gambar.jpg";

//import Login from "./loginGG";
import Utama from "./Utama";
import Gaji from "./Gaji";

import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import { Avatar } from "react-native-elements";

const Navigator = createStackNavigator({
  Home:{
    screen:Utama,
    navigationOptions:{
      header:null
    }
  },
  Gaji:{
    screen:Gaji,
    navigationOptions:{
      header:null
    }
  }
});

export default createAppContainer(Navigator);