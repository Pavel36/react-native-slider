import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TextBlock = (props) => {
    return (
        <View style={styles.textWrap}>
            <Text style={styles.textBlockTitle}>{props.title}</Text>
            {props.description.map((description)=><Text style={styles.textBlockDescription}>{description}</Text>)}
            
        </View>
    )
}

const styles = StyleSheet.create({
    textWrap: {
        marginTop:'5%'
    },
    textBlockTitle: {
        fontSize:30, 
        color:'#FFFFFF', 
        fontFamily:'Roboto',
        fontWeight: 'bold',
        opacity: .4
    },
    textBlockDescription: {
        fontSize:20, 
        color:'#FFFFFF', 
        fontFamily:'Roboto',
        fontWeight: 'bold'
    }
})

export default TextBlock
