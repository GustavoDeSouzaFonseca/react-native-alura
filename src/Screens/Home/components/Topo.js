import React from "react";
import { Text, View , Image, StyleSheet} from "react-native";
import logo from '../assets/logo.png'

export default function Topo(){
    
    return <View style ={styles.topo}>
        <Image source={logo} style={styles.imageLogo}/> 
        <Text style={styles.welcome}>Hello Gustavo!</Text>
        <Text style={styles.subtitle}>Find the best producers</Text>
    </View>

}

const styles = StyleSheet.create({
  topo:{
    backgroundColor: 'F6F6F6',
    padding: 16
  },
  imageLogo:{
    width: 70,
    height: 28
},
welcome:{
    marginTop:24,
    fontSize:26,
    lineHeight:42,
    fontWeight: 'bold'
},
subtitle:{
    fontSize: 16,
    lineHeight: 26
}
})