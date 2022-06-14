import React , {useState}from 'react';
import { Text, Button, StyleSheet, Pressable, TouchableOpacity, View} from 'react-native';

const mainColor = "#FD9D5D"


export default function BigButton(props){

    const styles = props.reverted ?  border : filled

    return (
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
    )
}

const filled = StyleSheet.create({
    container:{
        width: '18%',
        backgroundColor: mainColor,
        paddingVertical: 10,
        borderRadius: 13,
        alignItems: 'center'
    },
    text:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bolder'
    }
})

const border = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical: 10,

        borderWidth: 1.5,
        borderRadius: 13,
        borderColor: mainColor,

    },
    text:{
        color: mainColor,
        fontSize: 20,
    }
})