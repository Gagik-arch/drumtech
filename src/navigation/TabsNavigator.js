import React from "react";
import { TabBar } from "../components";
import { Settings, MyScores, Music } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const TabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={() => ({ headerShown: false, tabBarShowLabel: false })}>
      <Tab.Screen name="Music" component={Music} />
      <Tab.Screen name="MyScores" component={MyScores} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
