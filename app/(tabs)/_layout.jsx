import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import RightTabIcon from "../../components/rightTabIcons";
import { useStore } from "../../store/store";


const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="flex items-center justify-center gap-1">
            <View>{icon}</View>
            <Text
                className={`${focused ? "green" : "grey"} text-xs font-medium`}
                style={{ color: color }}
            >
                {name}
            </Text>
        </View>
    );
};

const TabLayout = () => {


    const { mode, setMode } = useStore();
    return (
        <>
            <Tabs
                screenOptions={{

                    tabBarActiveTintColor: "green",
                    tabBarInactiveTintColor: "grey",
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: `${mode === 'dark' ? '#1f2937' : "#ffffff"}`,
                        borderTopWidth: 1,
                        borderTopColor: "green",
                        height: 60,
                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerTitleAlign: "center",
                        headerTintColor: `${mode === 'dark' ? 'white' : "black"}`,
                        headerStyle: {
                            backgroundColor: `${mode === 'dark' ? '#1f2937' : "#ffffff"}`,
                            height: 70,
                            elevation: 0
                        }, headerTitleStyle: {
                            fontSize: 20,
                        },
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={< MaterialCommunityIcons name="home-circle" size={24} color={focused ? "green" : "grey"} />}
                                color={color}
                                name="Home"

                            />
                        ), headerRight: () => <RightTabIcon />,
                    }}
                />


                <Tabs.Screen
                    name="create"

                    options={{
                        title: "Create",
                        headerTitleAlign: "center",
                        headerTintColor: `${mode === 'dark' ? 'white' : "black"}`,
                        headerStyle: {
                            backgroundColor: `${mode === 'dark' ? '#1f2937' : "#ffffff"}`,
                            height: 70,
                            elevation: 0
                        }, headerTitleStyle: {
                            fontSize: 20,
                        },
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={<AntDesign name="pluscircle" size={24} color={focused ? "green" : "grey"} />}
                                color={color}
                                name="Create"

                            />
                        ), headerRight: () => <RightTabIcon />,
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        headerTitleAlign: "center",
                        headerTintColor: `${mode === 'dark' ? 'white' : "black"}`,
                        headerStyle: {
                            backgroundColor: `${mode === 'dark' ? '#1f2937' : "#ffffff"}`,

                            height: 70,
                            elevation: 0
                        }, headerTitleStyle: {
                            fontSize: 20,
                        },
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={<FontAwesome name="user" size={24} color={focused ? "green" : "grey"} />}
                                color={color}
                                name="Profile"

                            />
                        ), headerRight: () => <RightTabIcon />,

                    }}
                />
            </Tabs>
            <StatusBar backgroundColor={mode === "dark" ? "green" : "white"} style={mode === "dark" ? "light" : "dark"} />
        </>
    );
};

export default TabLayout;
