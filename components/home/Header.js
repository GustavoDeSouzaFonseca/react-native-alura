import React from "react";
import { View, StyleSheet, Text, SafeAreaView} from "react-native";

export default function Header(){
    return <SafeAreaView> 
        <View style={header.viewNavMain}>
            <Text>TESTE</Text>
        </View>
    </SafeAreaView>
}

const header = StyleSheet.create({
    viewNavMain:{
        width:"100%",
        height: 90,
        backgroundColor: "red"
    }
});