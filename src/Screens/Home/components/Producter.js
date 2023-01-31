import React, { useEffect , useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import TheProducter from "./TheProducter";
import useProducters from "../../../hooks/useProductors";



export default function Producter({ topo: Topo }){

    const [title, listProducter] = useProducters();

    const HeaderListProducter = () => {
        return <>
            <Topo />
            <Text style={styles.title}>{ title }</Text>
        </>
    }

    return <FlatList 
        data={listProducter}
        renderItem={({ item }) => <TheProducter {...item}/>}
        keyExtractor={({name}) => name}
        ListHeaderComponent={HeaderListProducter} 
        />
}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color:'#464646'
    }
})