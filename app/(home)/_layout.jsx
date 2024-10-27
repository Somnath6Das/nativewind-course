import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import RightTabIcon from "../../components/rightTabIcons";
import { useStore } from "../../store/store";
import { View, Image } from "react-native";

const Layout = () => {
    const { mode, setMode } = useStore();
    const dark_logo = require("../../assets/images/facebook-dark.png");
    const light_logo = require("../../assets/images/facebook-light.png");

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
                            source={`${mode === 'dark' ? dark_logo : light_logo}`}
                            style={{
                                width: 200,
                                height: 90,

                            }}
                        />
                    ),
                    headerTitle: () => <View></View>,
                    headerRight: () => <RightTabIcon />,
                }}
            />
        </Stack>
        <StatusBar backgroundColor={mode === "dark" ? "#3b5998" : "white"} style={mode === "dark" ? "light" : "dark"} /></>
    );
};

export default Layout;