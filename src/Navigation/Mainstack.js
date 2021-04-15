import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import TabRoutes from "./TabRoutes";
import navigationString from "../constants/navigationString"
import Detailspage from "../Screens/Detailspage/Detailspage";
import Homepage from "../Screens/HomePage/Homepage";
import Cartpage from "../Screens/Cartpage/Cartpage";

import Drawer from "./Drawer"
import Tat from "../Screens/TAT/Tat";
import Wat from "../Screens/WAT/Wat";
import Srt from "../Screens/SRT/Srt";
const Stack=createStackNavigator();

export default function(){


    return(
       <>
       {/* <Stack.Screen
        name={navigationString.TAB_ROUTES}
       options={{
          headerShown:false
        }}
        component={TabRoutes}
      />  */}
      <Stack.Screen
       name={navigationString.DRAWER}
       options={{
         headerShown:false
       }}
       component={Drawer}
      />

<Stack.Screen
        name={navigationString.DETAILSPAGE}
        options={{
          headerShown:false
        }}
        component={Detailspage}
      />

<Stack.Screen
        name={navigationString.CARTPAGE}
        options={{
          headerShown: false,
        }}
        component={Cartpage}
      />
      <Stack.Screen
        name={navigationString.WAT}
        options={{
          headerShown: false,
        }}
        component={Wat}
      />
      <Stack.Screen
        name={navigationString.SRT}
        options={{
          headerShown: false,
        }}
        component={Srt}
      />
      <Stack.Screen
        name={navigationString.TAT}
        options={{
          headerShown: false,
        }}
        component={Tat}
      />
 
      
        </>
    )
  }
