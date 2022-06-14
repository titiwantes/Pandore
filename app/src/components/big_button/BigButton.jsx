import React , {useState}from 'react';
import { Text, Button, StyleSheet, Pressable, TouchableOpacity, View} from 'react-native';

const mainColor = "#FD9D5D"


export default function BigButton(props){

    const styles = props.reverted ?  border : filled

    return (
            <TouchableOpacity style={styles(props).container} onPress={props.onPress}>
                <Text style={styles(props).text}>{props.text}</Text>
            </TouchableOpacity>
    )
}

const filled = (props) => StyleSheet.create({
    container:{
        width: props.width,
        backgroundColor: mainColor,
        paddingVertical: 20,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: 'white',
        fontWeight: '600'
    }
})

const border = (props) => StyleSheet.create({
    container:{
        width: props.width,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        paddingVertical: 20,
        borderWidth: 1.5,
        borderRadius: 20,
        borderColor: mainColor,
    
    },
    text:{
        color: mainColor,
        fontWeight: '600'
    }
})