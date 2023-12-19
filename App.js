import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import TabBar from "./src/navigation/root";


export default function App() {
  return (
        <NavigationContainer>
          <TabBar />
          <StatusBar/>
        </NavigationContainer>
  );
}