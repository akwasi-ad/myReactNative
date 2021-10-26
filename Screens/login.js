import React from "react";
import { StyleSheet,View,Text, Image,TouchableOpacity} from "react-native";
import { AntDesign } from "@expo/vector-icons";



export default function login ({navigation}){
    return <View style={styles.view}>
      <Image style={styles.image}  source={require('../Screens/Pitures/ingrid.jpg')}></Image>
      <Text style={styles.Txt}>Welcome</Text>
      <Text style={styles.Txt2}>POWER BIKE SHOP</Text>

      <TouchableOpacity style={styles.touch1}> 
      <AntDesign name="google" size={24} color="rgb(256,10,10)" style={{paddingRight:10}} />
      <Text style={{fontSize:20}}>Login with Gmail</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.touch2} 
      onPress={()=>{navigation.navigate('Home')}}>
      
      <AntDesign name="apple-o" size={24} color="white" style={{paddingRight:15}} />
      <Text style={{fontSize:20, color:"white"}}>Login with Apple</Text>
      </TouchableOpacity>

      <Text style={{padding:10}}>Not a member? <TouchableOpacity><Text style={{color:"orange"}}>Sign Up!</Text></TouchableOpacity></Text>
     </View>
    

};


const styles=StyleSheet.create({
    view:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:30,
        
        

    },
    image:{
        width:200,
        height:200,
        borderRadius:15,
        marginBottom:60,
        transform:"rotate(45deg)",
    
     
    },
    Txt:{
        color:"rbg(0,0,0.8)",
        fontSize:25,
    
    },
    Txt2:{
        color:"black",
        fontSize:30,
        fontWeight:"600",
    
    },
    touch1:{
        padding:10,
        backgroundColor:"#e3e3e3",
        marginTop:20,
        paddingHorizontal:60,
        borderRadius:10,
        flexDirection:"row",

    },
    touch2:{
        padding:10,
        backgroundColor:"black",
        marginTop:20,
        paddingHorizontal:60,
        borderRadius:10,
        flexDirection:"row",

    },
   

}
)