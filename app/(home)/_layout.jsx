import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import RightTabIcon from "../../components/rightTabIcons";
import { useStore } from "../../store/store";
import { View, Image } from "react-native";

const Layout = () => {
    const { mode, setMode } = useStore();
    return (<>
        <Stack screenOptions={{ headerShadowVisible: false }}>
            <Stack.Screen
                name="(tabs)"
                options={{
                    headerStyle: {
                        backgroundColor: `${mode === 'dark' ? '#1f2937' : "#ffffff"}`,  // Replace with your desired color
                    },
                    headerLeft: () => (
                        <Image
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/512/16183/16183576.png",
                            }}
                            style={{
                                width: 180,
                                height: 90,
                                borderRadius: 20,
                            }}
                        />
                    ),
                    headerTitle: () => <View></View>,
                    headerRight: () => <RightTabIcon />,
                }}
            />
        </Stack>
        <StatusBar backgroundColor={mode === "dark" ? "green" : "white"} style={mode === "dark" ? "light" : "dark"} /></>
    );
};

export default Layout;