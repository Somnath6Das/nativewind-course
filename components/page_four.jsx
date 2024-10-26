import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const horizontalData = [
    { id: '1', color: 'bg-blue-500', label: 'Item 1' },
    { id: '2', color: 'bg-green-500', label: 'Item 2' },
    { id: '3', color: 'bg-red-500', label: 'Item 3' },
    { id: '4', color: 'bg-purple-500', label: 'Item 4' },
];

const verticalData = [
    { id: '1', color: 'bg-gray-200', label: 'Vertical Item 1' },
    { id: '2', color: 'bg-gray-300', label: 'Vertical Item 2' },
    { id: '3', color: 'bg-gray-400', label: 'Vertical Item 3' },
    { id: '4', color: 'bg-gray-500', label: 'Vertical Item 4' },
    { id: '5', color: 'bg-gray-600', label: 'Vertical Item 5' },
    { id: '6', color: 'bg-gray-700', label: 'Vertical Item 6' },
    { id: '7', color: 'bg-gray-800', label: 'Vertical Item 7' },
];

export default function FlatListExample() {
    return (
        <View className="flex-1">
            {/* <StyledView className="bg-white py-2">
                <FlatList
                    data={horizontalData}
                    horizontal
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 16 }}
                    renderItem={({ item }) => (
                        <StyledView className={`w-40 h-40 ${item.color} justify-center items-center rounded-lg mx-2`}>
                            <StyledText className="text-white">{item.label}</StyledText>
                        </StyledView>
                    )}
                />
            </StyledView> */}
            <FlatList
                data={verticalData}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                renderItem={({ item }) => (
                    <StyledView className={`w-full h-40 ${item.color} justify-center items-center rounded-lg mb-4`}>
                        <StyledText className="text-black">{item.label}</StyledText>
                    </StyledView>
                )}
                ListHeaderComponent={() => (
                    <StyledView className="py-2">
                        <FlatList
                            data={horizontalData}
                            horizontal
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 16 }}
                            renderItem={({ item }) => (
                                <StyledView className={`w-40 h-40 ${item.color} justify-center items-center rounded-lg mx-2`}>
                                    <StyledText className="text-white">{item.label}</StyledText>
                                </StyledView>
                            )}
                        />
                    </StyledView>
                )}
            />
        </View>
    );
}
