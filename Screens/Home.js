import React from "react";
import {View,StyleSheet,Text,Image} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
//import Card from "./cards";


export default function Home (){
    return <View style={styles.view}>
        
        <View style={styles.icons}>
        <TouchableOpacity><Entypo name="menu" size={24} color="black" style={{marginLeft:10}}  /></TouchableOpacity>
        <TouchableOpacity><FontAwesome5 name="motorcycle" size={24} color="black"   /></TouchableOpacity>
        <TouchableOpacity><AntDesign name="search1" size={24} color="black" style={{position:"absolute",left:50}} /></TouchableOpacity>
        <TouchableOpacity><FontAwesome5 name="bell" size={24} color="black" /></TouchableOpacity>
        </View>
        <Text style={styles.Txt1}>The World's <Text style={{fontSize:25, color:"orange",fontWeight:"600", marginLeft:6}}>BEST BIKES</Text></Text>
        <Text style={{fontSize:15, marginTop:10, fontWeight:"bold" , marginLeft:10 , fontStyle:"San Serif"}}>categories</Text>
        <View style={styles.tFlex}>
            <Text style={{marginLeft:10,borderRadius:8,paddingHorizontal:20, backgroundColor:"#e3e3e3"}}>All</Text>
            <Text style={{borderRadius:8, backgroundColor:"#e3e3e3"}}>RoadBike</Text>
            <Text style={{borderRadius:8, backgroundColor:"#e3e3e3"}}>Mountain</Text>
            <Text style={{borderRadius:8, backgroundColor:"#e3e3e3"}}>Urb</Text>

        </View>
        
     <View style={{flexDirection:"row",justifyContent:"space-around", marginTop:10,paddingTop:20}}>
        <View style={{borderStyle:"solid",borderWidth:80,borderHeight:300, borderColor:"grey",borderRadius:20}}></View>
        <View style={{borderStyle:"solid",borderWidth:80,borderHeight:300, borderColor:"grey" ,borderRadius:20}}></View>
     </View>
     <View style={{flexDirection:"row",justifyContent:"space-around", marginTop:10,paddingTop:20}}>
        <View style={{borderStyle:"solid",borderWidth:80,borderHeight:300, borderColor:"grey",borderRadius:20}}></View>
        <View style={{borderStyle:"solid",borderWidth:80,borderHeight:300, borderColor:"grey" ,borderRadius:20}}></View>
     </View>
     <View style={{flexDirection:"row",justifyContent:"space-around", marginTop:10,paddingTop:20}}>
        <View style={{borderStyle:"solid",borderWidth:80,borderHeight:300, borderColor:"grey",borderRadius:20}}></View>
        <View style={{borderStyle:"solid",borderWidth:80,borderHeight:300, borderColor:"grey" ,borderRadius:20}}></View>
     </View>
    </View>

}






const styles=StyleSheet.create({
    view:{
       flex:1,
       marginTop:10

    },
    icons:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    Txt1:{
        fontSize:18,
        fontStyle:"San Serif",
        marginLeft:10,
        marginTop:10,
        fontWeight:"400"

    },
    tFlex:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10
    },
    
    
})
