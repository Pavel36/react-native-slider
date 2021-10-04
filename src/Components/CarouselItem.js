import React from 'react'
import { View,StyleSheet, Dimensions} from 'react-native'
import TextBlock from './TextBlock';

const {width} = Dimensions.get("window");

const CarouselItem = (props) => {

    const optimumSize= props.content.length > 2 ? Math.ceil(width/(6*props.content.length)+3) : Math.ceil(width/9);

    return (
        <View style={{...styles.container, width}}>
            {props.content.map((blockContent)=>
                <TextBlock optimumSize={optimumSize} key={blockContent.title} title={blockContent.title} description={blockContent.description}/>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       paddingHorizontal:20,
       flex:1,
       flexDirection: 'column',
       justifyContent: 'space-around'
    }
})

export default CarouselItem
