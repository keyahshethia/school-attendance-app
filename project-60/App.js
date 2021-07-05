import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import SummaryScreen from './Screens/SummaryScreen';
import HomeScreen from './Screens/HomeScreen';
import AppHeader from './components/AppHeader';

export default class App extends React.Component  {
  render(){
    return(
      <View>
       <AppHeader/>
        <AppContainer/>
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SummaryScreen: SummaryScreen,
});

const AppContainer = createAppContainer(AppNavigator);
