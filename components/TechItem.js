import React from 'react'
import { View , Text , StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

export default function TechItem(props) {
    return (
        <View style={styles.stackItem}>
            <Text style={styles.tech}>{props.tech}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    stackItem : {
        backgroundColor : Colors.accent,
        marginVertical : 2,
        marginHorizontal : 5 ,
        paddingHorizontal :7,
        paddingVertical : 3,
        borderRadius : 10,
        justifyContent : 'center' ,
        alignItems : 'center' 
    },
    tech : {
        fontFamily : 'open-sans',
        color : 'white' ,
        fontSize : 15
    }
})
