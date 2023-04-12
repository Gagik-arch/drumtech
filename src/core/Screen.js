import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {padding} from '../resources';

const Screen = ({
  children,
  style = {},
  contentContainerStyle = {},
  edges = ['top', 'left', 'right'],
  header = <></>,
  footer = <></>,
  scrollDisable = false,
  backgroundColor = 'white',
}) => {
  return (
    <KeyboardAvoidingView
      style={[
        {
          height: '100%',
        },
      ]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? 'padding' : StatusBar.height + 20
      }>
      {header}
      <SafeAreaView
        edges={edges}
        style={{
          flex: 1,
          backgroundColor,
          ...style,
        }}>
        <View style={[s.container]}>
          {scrollDisable ? (
            <View
              style={[
                {
                  flex: 1,
                },
              ]}>
              {children}
            </View>
          ) : (
            <ScrollView
              contentProps={{
                keyboardDismissMode: 'interactive',
                keyboardShouldPersistTaps: false,
              }}
              contentContainerStyle={[contentContainerStyle, {
                flexGrow: 1,justifyContent:'flex-start',
                alignItems:'flex-start'
              }]}
            >
              {children}
            </ScrollView>
          )}
        </View>
        {footer}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
});

export default Screen;
