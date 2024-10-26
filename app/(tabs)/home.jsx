import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import FlatListExample from '../../components/page_four';
const home = () => {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white dark:bg-slate-800">
            <FlatListExample />
        </SafeAreaView>
    )
}

export default home