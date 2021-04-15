import React, { Component } from "react";
import { Text, View, TouchableOpacity,Modal } from "react-native";
import navigationString from "../constants/navigationString";
import TabRoutes from "./TabRoutes";





function Drawer_Content(props) {
    const { navigation } = props;
    return (

        <View style={{ flex: 1 }}>
            <View style={{ margin: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate(navigationString.LATESTDEALS)}>
                    <Text>
                        PPDT
    </Text>
                </TouchableOpacity>
              
              
            </View>
            <View style={{ margin: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate(navigationString.SRT)}>
                    <Text>
                    Psychology
    </Text>
                </TouchableOpacity>
                {/* <Modal
                transparent
                onRequestClose={this.RequestClose}
                visible="true"
                >
                <View>
                    <Text>I a checking my modal</Text>
                </View>
                    </Modal> */}
                
              
              
            </View>
            <View style={{ margin: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate(navigationString.LATESTDEALS)}>
                    <Text>
                 GTO
    </Text>
                </TouchableOpacity>
              
              
            </View>
            <View style={{ margin: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate(navigationString.LATESTDEALS)}>
                    <Text>
                      INTERVIEW
    </Text>
                </TouchableOpacity>
              
              
            </View>

        </View>


    )
}
export default Drawer_Content;