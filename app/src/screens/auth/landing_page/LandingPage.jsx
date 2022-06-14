import React from "react"

import BigButton from "../../../components/big_button/BigButton"
import {View, Image, StyleSheet, Text} from 'react-native';

import LandingPic from '../../../assets/images/LandingPic.png'

const mainColor = "#FD9D5D"

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
                <View style={styles.message}>
                    <Text style={styles.title}>Bienvenue</Text>
                    <Text style={styles.landingText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis dignissim commodo.
                    Pellentesque blandit tristique consequat. Curabitur in justo laoreet
                    </Text>
                </View>
               
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <BigButton text='Connexion' width='100%'/>
                    </View>
                    <View style={styles.button}>
                        <BigButton reverted text="S'incsrire" width='100%'/>
                    </View>
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
        padding: 30,
        justifyContent:'space-between'
    },
    title:{
        color: mainColor,
        fontSize:20,
        paddingBottom: 20,
        fontWeight: '600'
    },

    landingText:{color: mainColor, fontWeight: '400'},

    message:{justifyContent: 'space-between'},

    button:{paddingBottom: 20,}

})