import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity} from "react-native";

import Stars from "../../../components/Stars";

export default function TheProducter({ name, image, distance, stars}){

    const [selected, setSelected] = useState(false);

    return<TouchableOpacity style={styles.card}
            onPress={() => setSelected(!selected)}>
        <Image source={image} accessibilityLabel={name} style={styles.logosCards} />
        <View style={styles.details}>
            <View>
                <Text style={styles.nameProducter}>{ name }</Text>
                <Stars quantity={stars}
                        edit={selected}
                        big={selected}/>
            </View>
            
            <Text style={styles.distanceProducter}>{ distance }</Text>
        </View>
        
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        
        elevation: 12 //@plataform: ANDROID

        // shadowColor:'#000', //@plataform: IOS
        // shadowOffset:{
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.23,
        // shadowRadius: 2.62
    },
    logosCards: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    details:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nameProducter:{
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    distanceProducter:{
        fontSize:12,
        lineHeight: 19
    }
})