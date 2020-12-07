import React from "react";
import {View,TouchableOpacity,Text,StyleSheet} from "react-native";

const ConvertorButton = ({symbol,onPress})=>{
    return (
        <TouchableOpacity style={styles.container} onPress={()=>onPress()}>
            <Text style={styles.font}>{symbol}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        height:100,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:"#c1c1c1",
        width:"33.3%",
    },
    font:{
        fontSize:30,
        color:"white"   
    }
})

export default ConvertorButton;