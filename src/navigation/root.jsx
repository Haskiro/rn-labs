import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome, Entypo} from '@expo/vector-icons';
import AdvertsStackScreen from "./adverts";
import ProfileDrawerScreen from "./profile";

const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    tabBarActiveTintColor: "#04764E",
                    headerShown: false,
                    title: 'Главная',
                    tabBarIcon: ({focused}) => (<Entypo name="home" size={24} color={focused ? '#04764E' : 'black'}/>)
                }}
                name="Home"
                component={AdvertsStackScreen} />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: "#123094",
                    title: 'Профиль',
                    tabBarIcon: ({focused}) => (<FontAwesome name="user-circle-o" size={24} color={focused ? '#123094' : 'black'}/>),
                }}
                name="Profile"
                component={ProfileDrawerScreen} />
        </Tab.Navigator>
    );
}

export default TabBar;