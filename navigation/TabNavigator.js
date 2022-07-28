import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import CrewsScreen from "../screens/CrewsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdated: false
        };
    }

    renderHome = props => {
        return <HomeScreen setUpdateToFalse={this.removeUpdated} {...props} />;
    };
    
    renderCrews = props => {
        return <CrewsScreen setUpdateToTrue={this.changeUpdated} {...props} />;
    };

    renderProfile = props => {
        return <ProfileScreen setUpdateToTrue={this.changeUpdated} {...props} />;
    };

    changeUpdated = () => {
        this.setState({ isUpdated: true });
    };
    
    removeUpdated = () => {
        this.setState({ isUpdated: false });
    };

    render() {
        return (
          <Tab.Navigator
            labeled = {true}
            barStyle = {styles.bottomTabStyle}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color }) => {
                let iconName;
                if (route.name === "Home") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Crews") {
                  iconName = focused ? "add-circle" : "add-circle-outline";
                } else if (route.name === "Profile") {
                    iconName = focused ? "home" : "home-outline";
                }

                return (
                  <Ionicons
                    name={iconName}
                    size={RFValue(25)}
                    color={color}
                    style={styles.icons}
                  />
                );
              }
            })}
            activeColor={"#ee8249"}
            inactiveColor={"gray"}
          >
            <Tab.Screen
              name="Home"
              component={this.renderHome}
              options={{ unmountOnBlur: true }}
            />
            <Tab.Screen
              name="Crews"
              component={this.renderCrews}
              options={{ unmountOnBlur: true }}
            />
            <Tab.Screen
              name="Profile"
              component={this.renderProfile}
              options={{ unmountOnBlur: true }}
            />
          </Tab.Navigator>
        );
      }
}

const styles = StyleSheet.create({
    bottomTabStyle: {
      backgroundColor: "#2f345d",
      height: "8%",
      borderTopLeftRadius: RFValue(30),
      borderTopRightRadius: RFValue(30),
      overflow: "hidden",
      position: "absolute"
    }, 

    icons: {
      width: RFValue(30),
      height: RFValue(30)
    }
});