import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function TrendingTenis() {

  const navigation = useNavigation()
  return (
    <View className="mb-3">
      <Text className="text-xl mb-1 font-semibold">Tênis em alta</Text>
      <Pressable 
        className="w-full h-44 rounded-2xl"
        key="1"
        onPress={() => navigation.navigate('banner4')}
        >
        <Image 
            source={require("../../../assets/tenis.png")}
            className="w-full h-44 rounded-2xl"
        />
        </Pressable>
    </View>
  )
}