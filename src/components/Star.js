import React from "react";
import { TouchableOpacity, Image , StyleSheet} from "react-native";
import star from '../Screens/Home/assets/estrela.png'
import grayStar from '../Screens/Home/assets/estrelaCinza.png'


export default function Star({ 
    onPress,
    desability,
    completed,
    big = false,
}) {
    const styles = stylesFunction(big);

    const getImage = () => {
        if (completed){
            return star;
        }
        return grayStar;
    }

    return <TouchableOpacity
        onPress = {onPress}
        disable = {desability}
    >
    <Image source ={getImage()} style={styles.star}/>
</TouchableOpacity>

}

const stylesFunction = (big) => StyleSheet.create({

    star:{
        width: big ? 36 : 12,
        height: big ? 36 : 12,
        marginRight: 2
    }
})

