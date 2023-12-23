import {createDrawerNavigator} from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";

const ProfileDrawer = createDrawerNavigator();

const ProfileDrawerScreen = () => {
    return (
        <ProfileDrawer.Navigator initialRouteName="UserMainInfo">
            <ProfileDrawer.Screen
                options={{
                    headerTitle: "",
                    title: 'Основная информация'
                }}
                name="UserMainInfo"
                component={Profile}
            />
            <ProfileDrawer.Screen
                options={{
                    headerTitle: "",
                    title: 'Настройки'
                }}
                name="Settings"
                component={Settings}
            />
        </ProfileDrawer.Navigator>
    );
}

export default ProfileDrawerScreen;