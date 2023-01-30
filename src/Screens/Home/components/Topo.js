import React from "react";
import { Text, View , Image, StyleSheet} from "react-native";
import logo from '../assets/logo.png'
import { loadingTopo } from "../../../service/loadingData";

class Topo extends React.Component{

    state = {
        topo: {
            welcome: '',
            subtitle: '', 
        }
    }

    uploadTopo(){
        const comeBack = loadingTopo();
        this.setState({ topo : comeBack})
    }

    componentDidMount(){
        console.log("component mounted!")
        this.uploadTopo();
    }

    render(){
        return <View style ={styles.topo}>
            <Image source={logo} style={styles.imageLogo}/> 
            <Text style={styles.welcome}>{ this.state.topo.welcome}</Text>
            <Text style={styles.subtitle}>{ this.state.topo.subtitle}</Text>
        </View>
    }
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
    fontWeight: 'bold',
    color: '#464646'
},
subtitle:{
    fontSize: 16,
    lineHeight: 26,
    color: '#a3a3a3a',
    letterSpacing: 0.8,
    
}
})

export default Topo;