import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TextBlock = (props) => {
    return (
        <View styles={styles.textBlock}>
            <Text style={styles.textBlockTitle}>{props.title}</Text>
            {props.description.map((description)=><Text style={styles.textBlockDescription}>{description}</Text>)}
            
        </View>
    )
}

const styles = StyleSheet.create({
    textBlockTitle: {
        fontSize:34, 
        color:'#FFFFFF', 
        fontFamily:'Roboto',
        fontWeight: 'bold',
        opacity: .4
    },
    textBlockDescription: {
        fontSize:24, 
        color:'#FFFFFF', 
        fontFamily:'Roboto',
        fontWeight: 'bold'
    }
})

export default TextBlock
