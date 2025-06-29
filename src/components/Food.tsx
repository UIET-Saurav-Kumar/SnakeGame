import { StyleSheet, Text, View } from "react-native";
import { Coordinates } from "../types/types";
import { JSX } from "react";



export default function Food ({x , y} : Coordinates) : JSX.Element {

    return (
        // <Text style={[{left : x*10 , top : y*10} , styles.food]}></Text>
        <Text style={[{left : x*10 , top : y*10} , styles.food]}>🍎</Text> 
    );
}

const styles = StyleSheet.create({
    food :{
        height : 20,
        width : 20,
        color : 'black',
        borderRadius : 7,
        position : 'absolute'
    }
})