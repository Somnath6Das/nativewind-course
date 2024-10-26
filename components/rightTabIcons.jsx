import { TouchableOpacity, View } from "react-native"
import { styled, useColorScheme } from "nativewind";


import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useStore } from "../store/store";

const StyledPressable = styled(TouchableOpacity)



const RightTabIcon = () => {
    const { mode, setMode } = useStore();
    const { colorScheme, setColorScheme } = useColorScheme();

    const scheme = () => {
        if (colorScheme === "dark") {
            setColorScheme("light");
            setMode(colorScheme)
        }
        else {
            setColorScheme("dark");
            setMode(colorScheme)
        }
    };
    return (
        <View className="flex items-end mr-4">
            <StyledPressable onPress={scheme} className="flex-1 items-center justify-center">
                {mode === "dark" ? <MaterialIcons name="light-mode" size={30} color="#FFBF00" /> : <MaterialIcons name="dark-mode" size={30} color="#3b5998" />}
            </StyledPressable>
        </View>
    );
};

export default RightTabIcon;

