import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigation/Navigator'
import ProfessorNavigator from './navigation/ProfessorNavigator';


// Font
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
const fetchFont = ()=>{
    return Font.loadAsync({
      'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
    })
}


export default function App() {
    const [fontLoaded , setFontLoaded] = useState(false);

    if(!fontLoaded){
        return  (<AppLoading
          startAsync={fetchFont}
          onFinish={()=>{setFontLoaded(true)}}
          onError={(err)=>{console.log(err)}}
      />)
    }
    return (
        <NavigationContainer>
            <Navigator/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  
});
