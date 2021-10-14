import React from "react";
import { StyleSheet,View,Text, Image,} from "react-native";



export default function login (){
    return <View style={styles.view}>
      <Image style={styles.image}  source={require('../Screens/Pitures/ingrid.jpg')}></Image>
      <Text style={styles.Txt}>Welcome</Text>
      <Text style={styles.Txt2}>POWER BIKE</Text>
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
        marginBottom:20,
    
     
    },
    Txt:{
        color:"black",
        fontSize:25,
    
    },
    Txt:{
        color:"black",
        fontSize:30,
        fontStyle:"normal"
    
    }

}
)