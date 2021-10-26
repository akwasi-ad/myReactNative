import React from 'react';
import { StyleSheet,View } from 'react-native';

export default function Card(props){
    return(
        <View style={styles.Card}>
            <View style={styles.CardContent}>
                {props.children}

            </View>
        </View>

    )
}


const styles=StyleSheet.create({
  Card:{
    width:160,
    height:210,
    border: "grey",
    padding: 50,
    margin: 20,
    borderRadius:10,
    backgroundColor:"red",
    marginTop:10,
    paddingRight:"10px",
    paddingLeft:"10px",
  },


})