import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TextBlock = (props) => {
    return (
        <View>
            <Text style={{...styles.textBlockTitle, fontSize:props.optimumSize}}>{props.title}</Text>
            {props.description.map((description, k)=><Text key={k} style={{...styles.textBlockDescription, fontSize:props.optimumSize}}>{description}</Text>)}
            
        </View>
    )
}


const styles = StyleSheet.create({
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
