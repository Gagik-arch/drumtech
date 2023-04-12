import React, { useEffect, useRef, useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { TabButton, Icon, Text, Button } from "./index";
import { Colors, padding, margin } from "../resources";

const doneTypingInterval = 240; //time in ms (260 seconds)

const regex = {
  //min 8 character, 1 number, 1 UPPERCASE, 1 lowercase, 1 special character
  password: {
    validation: new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
    ),
    errorMessage:
      "Password must be at least 8 characters long, contains 1 UPPERCASE 1 lowercase 1 special charecter.",
  },
  // @, 0 UPPERCASE, only com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)
  email: {
    validation: new RegExp(
      "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])(?:[A-z])?\\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|mail|ru)\\b",
    ),
    errorMessage: "Invalid email.",
  },
  phone: {
    validation: new RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/),
    errorMessage: "Invalid phone number.",
  },
  card: {
    validation: new RegExp(
      "^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\\d{3})\\d{11})$",
    ),
    errorMessage: "Invalid card number.",
  },
  expDate: {
    validation: new RegExp("^(0[1-9]|1[0-2])\\/?([0-9]{4}|[0-9]{2})$"),
    errorMessage: "Invalid expiry date.",
  },
  CVV: {
    validation: new RegExp("^[0-9]{3,4}$"),
    errorMessage: "Invalid CVV",
  },
  cardholder: {
    validation: new RegExp("^[a-zA-Z]+ [a-zA-Z]+$"),
    errorMessage: "Invalid name.",
  },
  postalCode: {
    validation: new RegExp("^[0-9]{5}(-[0-9]{4})?$"), // USPOSTAL CODE
    errorMessage: "Invalid postal code.",
  },
};

const validateField = (fieldName, text) => text?.length ? regex[fieldName].validation.test(text) : true;

const Input = React.forwardRef(
  (
    {
      value = "",
      placeholder,
      keyboardType,
      secureTextEntry = false,
      containerStyles,
      inputStyles,
      renderButtons = () => {
      },
      validationKey,
      name,
      errorMassage = null,
      onChange,
      onFinish,
      frontIcon = <></>,
      placeholderColor = "#ADADAD",
      maxLength,
      autoCapitalize = "none",
      autoCorrect = true,
      returnKeyType,
      onSubmitEditing,
      focus = false,
      disabled = false,
    },
    ref,
  ) => {
    const [visibility, setVisibility] = useState(secureTextEntry);
    const [defaultValue, setDefaultValue] = useState(value);
    const [isValid, setIsValid] = useState(false);
    let typingTimer = useRef(); //timer identifier

    useEffect(() => {
      setDefaultValue(value);
    }, [value]);

    useEffect(() => {
      if (validationKey) {
        const _isValid = validateField(validationKey, defaultValue);
        setIsValid(_isValid);
        onChange && onChange({
          text: defaultValue,
          isValid: _isValid,
          name,
        });
      }
      onChange && onChange({ text: defaultValue, name });
      setIsValid(true);
    }, []);

    const onTextChange = text => {
      if (keyboardType === "numeric") {
        const numText = text.toLowerCase().replace(/[^0-9]/g, "");
        if (validationKey !== "phone") {
          text = numText;
        }
        text = `1 (${numText.slice(1, 4)}) ${numText.slice(4)}`;
      }

      setDefaultValue(text);

      if (validationKey) {
        // [--- handled when user finished typing >>>
        const _isValid = validateField(validationKey, text);
        setIsValid(_isValid);

        if (onFinish) {
          clearTimeout(typingTimer.current);
          return (typingTimer.current = setTimeout(() => {
            onFinish({ text, isValid: _isValid, name });
          }, doneTypingInterval));
        }
        return onChange && onChange({ text, name, isValid: _isValid });
      }
      // [--- handled when user finished typing >>>
      if (onFinish) {
        clearTimeout(typingTimer.current);
        return (typingTimer.current = setTimeout(() => {
          onFinish({ text, name });
        }, doneTypingInterval));
      }
      return onChange && onChange({ text, name });
    };

    const defaultFlow = (
      <DefaultFlow
        defaultValue={defaultValue}
        setDefaultValue={setDefaultValue}
        validationKey={validationKey}
        isValid={isValid}
        containerStyles={containerStyles}
        onTextChange={onTextChange}
        ref={ref}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        visibility={visibility}
        placeholder={placeholder}
        inputStyles={inputStyles}
        setVisibility={setVisibility}
        renderButtons={renderButtons}
        frontIcon={frontIcon}
        placeholderColor={placeholderColor}
        maxLength={maxLength}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        focus={focus}
        disabled={disabled}
      />
    );

    return validationKey ? (
      <View>
        {defaultFlow}
        {!isValid && (
          <Text size={"normal12"} style={s.error}>
            {errorMassage || regex[validationKey]?.errorMessage}
          </Text>
        )}
      </View>
    ) : (
      defaultFlow
    );
  },
);

const DefaultFlow = React.forwardRef(
  (
    {
      defaultValue,
      setDefaultValue,
      validationKey,
      isValid,
      containerStyles,
      onTextChange,
      keyboardType,
      secureTextEntry,
      visibility,
      placeholder,
      inputStyles,
      setVisibility,
      renderButtons,
      frontIcon,
      placeholderColor,
      maxLength,
      autoCapitalize,
      autoCorrect,
      returnKeyType,
      onSubmitEditing,
      focus,
      disabled = false,
      validationRef,
    },
    ref,
  ) => {


    return (
      <View
        style={[
          s.container,
          {
            borderColor:
              validationKey ?
                (defaultValue ?
                  (isValid ? Colors.blue : "red")
                  : Colors.gray) :
                (defaultValue ? Colors.blue : Colors.gray),
            backgroundColor: disabled ? "#F6F6F6" : "white",
          },
          containerStyles,
        ]}>
        {frontIcon}
        <View style={{ flex: 1 }}>
          <TextInput
            ref={ref}
            value={defaultValue}
            onChangeText={onTextChange}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry && visibility && secureTextEntry}
            style={[s.input, inputStyles, {
              color: validationKey && !isValid ? Colors.red : Colors.blue,
            }]}
            placeholderTextColor={placeholderColor}
            maxLength={maxLength}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
            focus={focus}
            editable={!disabled}
          />
        </View>
        {renderButtons && renderButtons({ value: defaultValue, setValue: setDefaultValue })}
        {secureTextEntry ? (
          <Button onPress={() => setVisibility(!visibility)}>
            <Icon type={visibility ? "EyeOff" : "Eye"}
                  size={20}
                  color={defaultValue ? Colors.blue : Colors.gray}
            />
          </Button>
        ) : null}
      </View>
    );
  },
);

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    boxSizing: "border-box",
    ...padding(4, 10),
    borderRadius: 4,
    width: "100%",
  },
  input: {
    fontSize: 16,
    fontWeight: "400",
    color: "#2C3440",
    padding: 4,
  },
  error: {
    color: "red",
    ...margin(0, 0, 10, 0),
  },
});

export default Input;
