import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import TextBlock from './TextBlock';
import LinearGradient from 'react-native-linear-gradient';

const CarouselItem = (props) => {
    return (
    <View>
        <LinearGradient colors={['#6b73ff', '#000dff']} useAngle={true} angle={150}>
            <View style={styles.container}>
                <Text style={styles.itemTitle}>Calm</Text>
                {props.content.map((blockContent)=>
                    <TextBlock key={blockContent.title} title={blockContent.title} description={blockContent.description}/>
                )}
                <Button styles={styles.button} title={props.buttonText}/>
            </View>
        </LinearGradient>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal:20
    },
    itemTitle: {
        fontSize:30, 
        color:'#FFFFFF', 
        fontFamily:'Roboto',
        fontWeight: 'bold'
    },
    button: {
        color:'#056FDD',
        borderRadius:28,
        backgroundColor: '#FFFFFF'
    }
})

export default CarouselItem
