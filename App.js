import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import login from './Screens/login';
import Home from './Screens/Home';
import checkOut from './Screens/checkOut';


export default function App() {
  const MainNavigator = createStackNavigator();
  
  return (
    <View style={{flex:1}}>
      <NavigationContainer>
        <MainNavigator.Navigator screenOptions={{headerShown:false}} initialRouteName="login">
           <MainNavigator.Screen name="login" component={login} />
           <MainNavigator.Screen name="Home" component={Home} />
           <MainNavigator.Screen name="checkOut" component={checkOut} />
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
     
    
  );
}

const styles = StyleSheet.create({
  
  
});
