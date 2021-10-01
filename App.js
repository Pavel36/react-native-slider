import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Carousel from './src/Carousel';

const data =[{
  content: [
    {title:'You have', description:['millions of questions...']},
    {title:'We have', description:['answers in the starts!']}
  ],
  buttonText: 'Cool!'
},
{
  content: [
    {title:'Love', description:['When will I meet my soulmate?', 'When will I get married?', 'and others...']},
    {title:'Self', description:['What I am here to learn in life?', 'Am I on the right path?', 'and others...']},
    {title:'Daily life', description:['What is going to happen next?', 'Any insight for today?', 'and others...']}
  ],
  buttonText: 'Awesome!'
},
{
  content: [
    {title:'How it works', description:['Share birth details', 'Ask a question', 'An astrologer will make a prediction', 'Get your answer']}
  ],
  buttonText: 'Try now!'
}]

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Carousel data={data}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})

export default App;
