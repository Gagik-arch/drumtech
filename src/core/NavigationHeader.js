import React from "react";
import { View, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { Icon, Text } from "./index";
import {padding, Colors, border} from "../resources";

const NavigationHeader = ({
                            backHandler = false,
                            backAction = null,
                            buttons = null,
                            style = {},
                            title,
                            ...props
                          }) => {
  return (
    <View style={[s.container, style]}>
      <StatusBar backgroundColor={Colors.yellow} barStyle="light-content" />
   <View style={{flex:1}}>
     {backHandler ? (
       <TouchableOpacity
         style={s.back_btn}
         onPress={e =>
           backAction ? backAction(e) : props.navigation.goBack()
         }>
         <Icon type={"ChevronLeft"}  />
         <Text size={'17_400'}>Back</Text>
       </TouchableOpacity>
     ) : null}
   </View>

      <View style={s.title_container}>
        {title || (
          <Text style={s.title} size={"17_600"} numberOfLines={1}>
            {props.route.name}
          </Text>
        )}
      </View>

      <View style={s.buttons}>
        {buttons}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.yellow,
    justifyContent: "space-between",
    position: "relative",
    ...padding(16),
      ...border(0,0,1,0),
      borderColor:'rgb(179,179,179)'
  },
  title_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    zIndex: -1,
  },
  title: {
    flex: 1,
    textAlign: "center",
    color: "black",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex:1
  },
  back_btn:{
    flexDirection:'row',
    alignItems:'center',
  }
});
export default NavigationHeader;
