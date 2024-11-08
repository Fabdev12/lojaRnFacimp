import { Pressable, View, Text, Image, ScrollView } from "react-native";
import { Ionicons, Feather} from '@expo/vector-icons'
import AntDesing from '@expo/vector-icons/AntDesign'
import {useNavigation} from '@react-navigation/native'
import { CartContext } from "../../../contexts/CartContext";
import { useContext } from "react";


export function TopHeader(){
    const navigation = useNavigation()
    const { getTotalItems } = useContext(CartContext)
    return(
        <ScrollView>
            <View className="w-full flex flex-row items-center justify-between mt-3">
                <Pressable className="w-10 h-10 bg-[#004832] rounded-full flex justify-center items-center">
                    <Ionicons name="menu" size={20} color="#fff"></Ionicons>
                </Pressable>

                <Pressable className="w-10 h-10 bg-[#004832] rounded-full flex justify-center items-center" onPress={()=>navigation.navigate('Cart')}>

                    <View className="bg-red-600 items-center justify-items-center w-6 h-6 rounded-full absolute z-10 left-[-9] bottom-[0]">
                        <Text className="items-center justify-items-center text-white">{getTotalItems()}</Text>
                    </View>
                    <AntDesing name="shoppingcart" size={20} color="#fff"/>

                    

                </Pressable>
            </View>

            
        </ScrollView>

        

    )
}