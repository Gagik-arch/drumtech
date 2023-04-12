import { useState, useRef, useCallback, useMemo, useLayoutEffect } from "react";
import { ActivityIndicator, Image, View, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { Button, Screen, Icon, Text, Input } from "../../core";
import logo from "../../../assets/images/logo.png";
import bg from "../../../assets/images/bg.png";
import s from "./style";
import { Colors, validateFields, margin, onChangeBody } from "../../resources";
import BottomSheet from "@gorhom/bottom-sheet";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

export const Registration = ({ route, navigation }) => {
  const [body, setBody] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const snapPoints = useMemo(() => ["25%"], []);
  const bottomSheetRef = useRef(null);

  const state = useMemo(() => route.params, [route]);

  const onChange = e => {
    onChangeBody(e, body, setBody);
  };

  const disableSubmitBtn = useCallback(() => {
    const query = ["password", "email"];
    return validateFields(query, Object.keys(body));
  }, [body]);

  const onSubmit = () => {
    // dispatch(login({ body, navigation }));
  };
  const onOpenModal = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };

  const onUpload = async (index) => {
    try {
      let result;
      const options = {
        mediaType: "photo",
        includeBase64: true,
      };
      result = await index === 1 ? launchCamera(options) : launchImageLibrary(options);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Screen>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        detached={true}
        enableContentPanningGesture={true}
        enableHandlePanningGesture={true}
        enablePanDownToClose={true}
        containerStyle={s.modal}
        style={{ borderWidth: 1, borderColor: "rgba(0,0,0,0.1)" }}>
        <Button label={"Upload with storage"} onPress={() => onUpload(0)} type={"link"} style={s.modal_btn} />
        <Button label={"Upload with camera"} onPress={() => onUpload(1)} type={"link"} style={s.modal_btn} />
      </BottomSheet>
      <ImageBackground source={bg} style={s.bg}>
        <View style={s.top}>
          <Image source={logo} style={s.logo} />
          <TouchableOpacity style={s.show_upload_modal}
                            onPress={onOpenModal}>
            <View style={s.circle}>
              <Icon type={"Camera"} stroke={"white"} size={14} />
            </View>
          </TouchableOpacity>
          <Text size={"normal40"} style={s.hint}>Company Logo</Text>
        </View>
        <ScrollView style={s.scroll}>
          <Input placeholder={"Your Name"} containerStyles={s.input_container} />
          <Input placeholder={"Phone Number"} containerStyles={s.input_container} />
          <Input placeholder={"Company Name"} disabled={true} containerStyles={s.input_container} />
          <Input placeholder={"Industry"} disabled={true} containerStyles={s.input_container} />
          <Input placeholder={"VAT"} disabled={state} containerStyles={s.input_container} />
          <Input placeholder={"Country"} disabled={state} containerStyles={s.input_container} />
          <Input placeholder={"Address"} containerStyles={s.input_container} />
          <View style={s.row}>
            <Input placeholder={"City"} containerStyles={s.input_container} />
            <View style={s.spacer} />
            <Input placeholder={"Poastal Code"} containerStyles={s.input_container} />
          </View>
          <Input placeholder={"Email"} />
          <View style={s.btn_container}>
            <Button
              variant={'primary'}
              style={{ ...margin(20, 0, 0, 0) }}
              // disabled={disableSubmitBtn()}
              onPress={onSubmit}
            >
              <>
                <Text size={"bold18"} style={{ color: "white" }}>{state ? 'SAVE':'CONTINUE'}</Text>
                {isLoading ? <ActivityIndicator /> : null}
              </>
            </Button>
          </View>
        </ScrollView>
      </ImageBackground>
    </Screen>
  );
};
