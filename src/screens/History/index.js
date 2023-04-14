import React, { useMemo, useState } from "react";
import { Button, NavigationHeader, PageViewer, Screen, Text } from "../../core";
import s from "./style";
import { Image, View } from "react-native";
import logo from "../../../assets/images/header_logo.png";

const data = [
  {
    count: "20 000",
    title: "Msg. bought",
  },
  {
    count: "Current Msg.",
    title: "$1.100",
  },
  {
    count: "Remain",
    title: "$1.950",
  },
];

const campaignData = [
  {
    date: "Campaigns",
    package: "Messages",
    value: "N Countries",
  },
  {
    date: "Launching",
    package: "By me...",
    value: "55",
  },
  {
    date: "Launching",
    package: "By me...",
    value: "6",
  },
  {
    date: "Launching",
    package: "By me...",
    value: "5",
  },
];

const paymentData = [
  {
    date: "Date",
    package: "Music",
    value: "400 USD",
  },
  {
    date: "2023-03-09",
    package: "20 000 Msg",
    value: "400 USD",
  },
  {
    date: "2023-03-09",
    package: "60 000 Msg",
    value: "1100 USD",
  },
  {
    date: "2023-03-09",
    package: "20 000 Msg",
    value: "400 USD",
  },
];

export const History = (props) => {
  const viewerData = useMemo(() => {
    return {
      "Payment History": <Table data={paymentData} />,
      "Campaign History": <Table data={campaignData} />,
    };
  }, []);

  return (
    <Screen style={s.container}
            header={<NavigationHeader {...props} title={<Image source={logo} style={s.logo} width={220} />}
                                      buttons={<View style={s.circle} />}
            />
            }>
      <View style={s.row}>
        {data.map(item => {
          return (
            <Button key={item.count} style={s.row_card}>
              <Text style={s.card_text} size={"14_500"}>Msg. bought</Text>
              <Text style={s.card_text} size={"14_500"}>20 000</Text>
            </Button>
          );
        })}
      </View>
      <PageViewer data={viewerData} />
    </Screen>
  );
};

const Table = ({ data }) => {

  return (
    <View style={s.table}>
      {data.map((item, index) => {
        return (
          <View style={s.tr} key={index}>
            <View style={s.td}><Text size={index === 0 ? '14_700' : '14_500'} style={s.td_text}>{item.date}</Text></View>
            <View style={s.td}><Text  size={index === 0 ? '14_700' : '14_500'} style={s.td_text}>{item.package}</Text></View>
            <View style={s.td}><Text  size={index === 0 ? '14_700' : '14_500'} style={s.td_text}>{item.value}</Text></View>
          </View>
        );
      })}
    </View>
  );
};
