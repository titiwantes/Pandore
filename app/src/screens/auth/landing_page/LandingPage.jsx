import React from "react"

import BigButton from "../../../components/big_button/BigButton"
import {View, Image, StyleSheet, Text} from 'react-native';

import LandingPic from '../../../assets/images/LandingPic.png'

export default function LandingPage(props){

    return (
        <View style={styles.view}>
            <View style={styles.picView}>
                <Image
                    style={styles.picture}
                    source={LandingPic}
                />
            </View>

            <View style={styles.mainView}>
                <Text style={styles.title}>Bienvenue</Text>
                <Text>coucoucoucpcu</Text>
            
                <View style={styles.buttons}>
                    <BigButton text='Connexion'/>
                    <BigButton reverted text="S'incsrire"/>
                </View>


            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
  
    },
    picView:{
        flex: 1,
        alignItems: 'center',
    },

    picture:{
        flex: 1,
        resizeMode: 'contain'
    },

    mainView:{
        flex: 1,
        backgroundColor: 'red'
    },
    title:{
        color: 'black'
    },
    buttons:{
        width: '100%',
        alignItems:'center',
        backgroundColor: 'blue'
    }

})