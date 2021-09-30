import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CarouselItem from './src/CarouselItem'

const App = () => {
  return (
    <SafeAreaView>
      <CarouselItem content={[{title:'Love', description:['When will I meet my soulmate?', 'When will I get married?', 'and others...']},{title:'Self', description:['What I am here to learn in life?', 'Am I on the right path?', 'and others...']},{title:'Daily life', description:['What is going to happen next?', 'Any insight for today?', 'and others...']}]} buttonText='Cool!'/>
    </SafeAreaView>
  );
};

export default App;
