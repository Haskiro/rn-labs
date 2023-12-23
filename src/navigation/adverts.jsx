import Home from "../screens/Home";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SingleAdvert from "../screens/SingleAdvert";

const AdvertsStack = createNativeStackNavigator();

const AdvertsStackScreen = () => {
    return (
        <AdvertsStack.Navigator initialRouteName="AdvertsList">
            <AdvertsStack.Screen
                options={{ headerShown: false }}
                name="AdvertsList"
                component={Home}
            />
            <AdvertsStack.Screen
                options={{ headerTintColor: "#123094", headerTitle: "" }}
                name="SingleAdvert"
                component={SingleAdvert}
            />
        </AdvertsStack.Navigator>
    );
}

export default AdvertsStackScreen;