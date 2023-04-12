import React from "react";
import { TabBar } from "../components";
import { Settings, Statistics, History,Package } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const TabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={() => ({ headerShown: false, tabBarShowLabel: false })}>
      <Tab.Screen name="Package" component={Package} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Statistics" component={Statistics} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
