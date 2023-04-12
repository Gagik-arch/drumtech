import { useState, useRef, useCallback } from "react";
import { ActivityIndicator, Image, View, ImageBackground } from "react-native";
import { Button, Screen, Icon, Text, CodeInput } from "../../core";
import logo from "../../../assets/images/logo.png";
import bg from "../../../assets/images/bg.png";
import s from "./style";
import { Colors, validateFields, margin, onChangeBody } from "../../resources";

export const OTPverification = ({ navigation }) => {
  const [body, setBody] = useState({});
  const [isAgree, setIsAgree] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const phoneInput = useRef(null);
  const onChange = e => {
    onChangeBody(e, body, setBody);
  };

  const disableSubmitBtn = useCallback(() => {
    const query = ["password", "email"];
    return validateFields(query, Object.keys(body));
  }, [body]);

  const onSubmit = () => {
    navigation.navigate("TabsNavigator");
  };

  return (
    <Screen>
      <ImageBackground source={bg} style={s.bg}>
        <Image source={logo} s-tyle={s.logo} />
        <Text size={"20_600"} style={s.header}>One Time Password</Text>
        <Text size={"14_400"}
              style={s.title}>
          Please enter the 6 digit code we sent to your mobile phone to continue
        </Text>
        <CodeInput containerStyle={{ width: 360 }} />
        <Button label={"Resend Code"}
                textSize={"16_400"}
                type={"link"}
                textStyle={s.resend_btn}
                onPress={onSubmit}
        />
      </ImageBackground>
    </Screen>

  );
};
