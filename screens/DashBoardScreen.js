import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "../navigation/TabNavigator";

export default function DashboardScreen() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
