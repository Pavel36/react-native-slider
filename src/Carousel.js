import React, { useRef, useState } from 'react'
import { ScrollView, View, Dimensions, Button, Text, StyleSheet, Pressable } from 'react-native'
import CarouselItem from './CarouselItem'
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get("window");

const Carousel = (props) => {
    const [activeSlide, setActiveSlide] = useState(0);
    let a = activeSlide;
    const scrollRef = useRef(0);
    const changeSlide=({nativeEvent})=>{
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if(slide!==activeSlide) {
            setActiveSlide(slide)
        }
    }
    return (
        <View>
            <LinearGradient style={style.container} colors={['#6b73ff', '#000dff']} useAngle={true} angle={150}>
                <Text style={style.itemTitle}>Calm</Text>
                <ScrollView style={style.scroll} ref={scrollRef} pagingEnabled={true} showsHorizontalScrollIndicator={false} horizontal onScroll={changeSlide}>
                    {props.data.map((item, k)=><CarouselItem key={k} content={item.content}/>)}
                </ScrollView>
                <View style={style.pagination}>
                    {props.data.map((item, k)=><Text key={k} style={activeSlide===k?style.paginationDotActive:style.paginationDot}>⬤</Text>
                    )}
                </View>
                <View style={style.buttonWrap}>
                    <Pressable style={style.button} onPress={()=>{scrollRef.current.scrollTo({x:width*(++a), animated:true})}}>
                        <Text style={style.text}>{props.data[a].buttonText}</Text>
                    </Pressable>
                </View>
            </LinearGradient>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
       height
    },
    itemTitle: {
        paddingHorizontal:20,
        fontSize:30, 
        color:'#FFFFFF', 
        fontFamily:'Roboto',
        fontWeight: 'bold'
    },
    pagination: {
        flexDirection:'row', 
        position:'absolute', 
        bottom:'12%', 
        alignSelf:'center'
    },
    paginationDot: {
        color:'#888', 
        margin:3
    },
    paginationDotActive: {
        color:'#fff', 
        margin:3
    },
    buttonWrap: {
        marginBottom:'5%',
        paddingHorizontal:20,
        marginTop:'15%'
    },
    button: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 9,
        paddingHorizontal: 32,
        borderRadius: 28
    },
    text: {
        fontSize:22,
        color: '#056FDD',
        fontWeight: '400',
        fontFamily:'Roboto'
    }
})

export default Carousel
