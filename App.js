import 'react-native-gesture-handler';
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import TabBar from "./src/navigation/root";
import AuthProvider from "./src/components/AuthProvider";


export default function App() {
  return (
        <NavigationContainer>
            <AuthProvider>
                <TabBar />
            </AuthProvider>
          <StatusBar/>
        </NavigationContainer>
  );
}