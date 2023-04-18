import { useState, useRef, useCallback } from "react";
import { ActivityIndicator, Image, View, ImageBackground } from "react-native";
import { Button, Screen, Icon, Text, CodeInput, Input } from "../../core";
import logo from "../../../assets/images/logo.png";
import bg from "../../../assets/images/bg.png";
import s from "./style";
import { Colors, validateFields, margin, onChangeBody } from "../../resources";

export const OTPverification = ({ navigation }) => {
  const [body, setBody] = useState({});
  const [isAgree, setIsAgree] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onChange = e => {
    onChangeBody(e, body, setBody);
  };

  const disableSubmitBtn = useCallback(() => {
    const query = ["password", "email"];
    return validateFields(query, Object.keys(body));
  }, [body]);

  const onSubmit = () => {
  };

  return (
    <Screen contentContainerStyle={s.container}>
      <View style={s.top}>
        <Image source={logo}/>
        <Text size={"24_600"} style={s.header}>Check your email</Text>
        <View style={s.divider} />
        <Text size={"16_400"} style={s.title}>
          We have sent a code to your email, write it here
        </Text>
      </View>
      <Input placeholder={"Type the code"}
             keyboardType={"numeric"}
             maxLength={6}
             containerStyles={s.input}
      />
      <Button variant={"primary"}
              label={"Next"}
              textSize={"16_400"}
              type={"link"}
              style={s.btn}
              onPress={onSubmit}
      />
      <Button variant={"secondary"}
              label={"Resend"}
              textSize={"16_400"}
              type={"link"}
              style={s.btn}
              onPress={onSubmit}
      />
    </Screen>

  );
};
