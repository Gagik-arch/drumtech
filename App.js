import React, {useEffect} from "react";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {StackNavigator} from './src/navigation';
import Toast from 'react-native-toast-message';
// import {Provider} from 'react-redux';
// import store from './src/store';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {Colors} from './src/resources'
import SplashScreen from 'react-native-splash-screen'

const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    },
};
export default () => {

    useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <SafeAreaProvider>
            <StatusBar backgroundColor={'white'} barStyle="dark-content"/>

            {/*<BottomSheetModalProvider>*/}
                <NavigationContainer theme={navTheme}>
                    <StackNavigator/>
                </NavigationContainer>
            {/*</BottomSheetModalProvider>*/}
            <Toast/>
        </SafeAreaProvider>
    );
};
