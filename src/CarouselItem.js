import React from 'react'
import { View,StyleSheet, Dimensions} from 'react-native'
import TextBlock from './TextBlock';

const {width} = Dimensions.get("window");

const CarouselItem = (props) => {
    let a =  props.activeSlide
    return (
    <View style={{width}}>
        <View style={styles.container}>
            {props.content.map((blockContent)=>
                <TextBlock key={blockContent.title} title={blockContent.title} description={blockContent.description}/>
            )}
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
       paddingHorizontal:20
    },
    itemTitle: {
        fontSize:30, 
        color:'#FFFFFF', 
        fontFamily:'Roboto',
        fontWeight: 'bold'
    },
    
})

export default CarouselItem
