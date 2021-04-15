import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import colors from "../styles/colors";


export default function Formbutton(props) {
  const { onButtonPress,  buttonName, text,mytext,style,name,TotalPrice ,textbtn,styleofprofilebutton,styleofppdtbutton} = props;
  let check=false;
  return (
    <View style={styles.textInput}>
      <TouchableOpacity
        onPress={onButtonPress}
        style={[styles.buttonStyle, style, styleofprofilebutton,styleofppdtbutton]}
      >
        <Text style={[styles.text,textbtn]}>{buttonName}  </Text>
      
        
       
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flexDirection: "row",
    justifyContent: "center",
   
  
  
  },
  buttonStyle: {
    backgroundColor: colors.themeColor,
    padding: 15,
    width: 320,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    
    
  },
  text:{
    color: "#e3e3e3", fontWeight: "bold"
  }
  

});
