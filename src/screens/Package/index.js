import React, { useState } from "react";
import { Image, View } from "react-native";
import { Button, NavigationHeader, Screen, Text } from "../../core";
import logo from "../../../assets/images/header_logo.png";
import s from "./style";
import { margin } from "../../resources";

export const Package = (props) => {
  const [selected, setSelected] = useState();
  const data = [
    {
      count: "20 000",
      price: "$400",
      bg: "#BF9000",
    },
    {
      count: "60 000",
      price: "$1.100",
      bg: "#0070C0",
    },
    {
      count: "120 000",
      price: "$1.950",
      bg: "#548235",
    },
    {
      count: "240 000",
      price: "$3.150",
      bg: "#F29F05",
    },
  ];

  const onPresCard = (index) => {
    setSelected(index);
  };
  const onSubmit = () => {
    props.navigation.navigate("Payment");
  };

  return (
    <Screen
      style={s.container}
      header={<NavigationHeader {...props} title={<Image source={logo} style={s.logo} width={220} />}
                                buttons={<View style={s.circle} />}
      />
      }
    >
      <Text size={"32_500"} style={s.title}>Buy more messages</Text>
      <Text size={"20_400"} style={s.subtitle}>
        Turn business travelers
        waiting time into your
        business time
      </Text>
      <View style={s.card_container}>
        {data.map((item, index) => {
          return (
            <Button key={item.count}
                    style={[s.card,
                      {
                        backgroundColor: item.bg,
                        borderColor: index === selected ? "black" : "transparent",
                      },
                    ]}
                    onPress={() => onPresCard(index)}
            >
              <Text size={"16_400"} style={s.text}>{item.count}</Text>
              <Text size={"12_400"} style={[s.text, margin(10, 0)]}>Messages</Text>
              <Text size={"16_600"} style={s.text}>{item.price}</Text>
            </Button>
          );
        })}
      </View>
    <View style={s.btn_container}>
      <Button label={"Choose your package"}
              style={s.submit_btn}
              variant={"primary"}
              onPress={onSubmit}
      />
      <Button textSize={"16_600"}
              textStyle={s.no_thanks_btn}
              label={"No Thanks"}

      />
    </View>
    </Screen>
  );
};
