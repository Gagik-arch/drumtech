import {
  Login,
  OTPverification,
  Registration,
  Payment, Profile, CurrentPackage, ForgotPassword,
} from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import {TabsNavigator} from '../navigation'
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation();

  // useEffect(() => {
  //   const checkAuthorization = async () => {
  //     try {
  //       const a = await Storage.getItem("token");
  //       navigation.navigate(a ? "Home" : 'Login');
  //
  //       SplashScreen.hide();
  //     } catch (e) {
  //       navigation.navigate("Login");
  //       SplashScreen.hide();
  //     }
  //   };
  //   checkAuthorization();
  // }, []);

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name={"Login"}
          component={Login}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name={"ForgotPassword"}
          component={ForgotPassword}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name={"OTPverification"}
          component={OTPverification}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name={"Registration"}
          component={Registration}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name={"TabsNavigator"}
          component={TabsNavigator}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name={"Payment"}
          component={Payment}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name={"Profile"}
          component={Profile}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name={"CurrentPackage"}
          component={CurrentPackage}
          options={{ header: () => null }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
