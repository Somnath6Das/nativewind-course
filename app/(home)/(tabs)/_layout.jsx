import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useStore } from "../../../store/store";
const { Navigator } = createMaterialTopTabNavigator();
export const MaterialTopTabs = withLayoutContext(Navigator);

const Layout = () => {
    const { mode, setMode } = useStore();
    return (
        <MaterialTopTabs
            screenOptions={{
                tabBarActiveTintColor: "#3b5998",
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: "bold",
                    textTransform: "capitalize",
                },
                tabBarIndicatorStyle: {
                    backgroundColor: `${mode === 'dark' ? "#75c5ff" : "#3b5998"}`,
                    height: 3,
                },
                tabBarStyle: {
                    backgroundColor: `${mode === 'dark' ? '#1f2937' : "#ffffff"}`,
                    elevation: 0
                },
            }}
        >
            <MaterialTopTabs.Screen
                name="index"
                options={{
                    tabBarLabel: () => (
                        <Entypo name="home" size={30} color={mode === 'dark' ? "#75c5ff" : "#3b5998"} />
                    ),
                }}
            />
            <MaterialTopTabs.Screen
                name="friends"
                options={{
                    tabBarLabel: () => <FontAwesome name="bell" size={26} color={mode === 'dark' ? "#75c5ff" : "#3b5998"} />,
                }}
            />

            <MaterialTopTabs.Screen
                name="profile"

                options={{
                    tabBarLabel: () => <FontAwesome name="user" size={30} color={mode === 'dark' ? "#75c5ff" : "#3b5998"} />,
                }}
            />
        </MaterialTopTabs>
    );
};

export default Layout;

