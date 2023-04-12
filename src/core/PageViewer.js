import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native";
import { Text } from "./index";
import PagerView from "react-native-pager-view";
import { Colors, margin, padding } from "../resources";

const PageViewer = ({
                      data = {},
                      containerStyle = {},
                      divider = false,
                      initialPage= 0 ,
                      onChange,
                    }) => {
  const [selected, setSelected] = useState(0);
  const translateX = useState(new Animated.Value(0))[0];
  const viewPager = useRef();
  let width = useRef();

  const switchAnimation = x => {
    Animated.timing(translateX, {
      toValue: x,
      duration: 120,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };

  const onSelect = index => viewPager.current.setPage(index);

  const onPageScroll = event => {
    const { position } = event.nativeEvent;
    setSelected(position);
    const x = width.current ? position * width.current : 0;
    switchAnimation(x);
    onChange && onChange({position,label:Object.keys(data)[position]})
  };

  return (
    <View style={{ flex: 1, height: "100%", width: "100%" }}>
      <View style={[s.container, containerStyle]}>
        <Animated.View
          onLayout={({ nativeEvent }) => {
            width.current = nativeEvent.layout.width;
          }}
          style={[
            s.switch,
            {
              transform: [{ translateX }],
              width: 100 / Object.keys(data).length + "%",
            },
          ]}
        />

        {Object.keys(data).length ? Object.keys(data)?.map((item, index) => {
          const _style = selected === index ? s.selected_text : s.text;
          return (
            <React.Fragment key={index}>
              {divider && index > 0 && (
                <View
                  style={[
                    s.divider,
                    {
                      backgroundColor: "#CCCDD1",
                    },
                  ]}
                />
              )}
              <TouchableOpacity
                onPress={() => onSelect(index)}
                style={s.button}>
                <Text size="16_500" style={_style}>
                  {item}
                </Text>
              </TouchableOpacity>
            </React.Fragment>
          );
        }) : <Text>Push data to custom Page Viewer</Text>}
      </View>
      <PagerView
        style={s.pagerView}
        ref={viewPager}
        initialPage={initialPage}
        onPageSelected={onPageScroll}
        scrollEnabled={true}>

        {Object.keys(data).length &&
          Object.entries(data).map(([key, value], index) => {
            return (
              <View style={{ flex: 1 }} key={index}>{value}</View>
            );
          })}
      </PagerView>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 4,
  },

  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...padding(8, 0),
    zIndex: 1,
  },
  switch: {
    position: "absolute",
    height: "100%",
    zIndex: 1,
    borderBottomWidth: 2,
    borderBottomColor: Colors.blue,
  },

  pagerView: {
    flex: 1,
    height: "100%",
  },
  selected_text: {
    color: "#535353",
  },
  text: {
    color: "#535353",
  },
  divider: {
    width: 1,
    zIndex: -1,
    ...margin(10, 0),
  },
});

export default PageViewer;
