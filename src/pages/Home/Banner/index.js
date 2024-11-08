import { View, Pressable,TextInput, Image } from "react-native"
import PagerView from "react-native-pager-view"
import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native"

export function Banner(){
    const navigation = useNavigation();
    return(
        <View>
        <View className="w-full h-40 rounded-2xl mt-5 mb-2" >
           <PagerView style={{flex:1}} initialPage={0} pageMargin={14}>
            <Pressable 
                className="w-full h-40 rounded-2xl"
                key="1"
                onPress={() => navigation.navigate('banner1')}
            >
                <Image 
                    source={require("../../../assets/banner2.png")}
                    className="w-full h-40 rounded-2xl"
                />
            </Pressable>

            <Pressable 
                className="w-full h-40 rounded-2xl"
                key="2"
                onPress={() => navigation.navigate('banner2')}
            >
                <Image 
                    source={require("../../../assets/banner1.png")}
                    className="w-full h-40 rounded-2xl"
                />
            </Pressable>

            <Pressable 
                className="w-full h-40 rounded-2xl"
                key="3"
                onPress={() => navigation.navigate('banner3')}
            >
                <Image 
                    source={require("../../../assets/banner3.png")}
                    className="w-full h-40 rounded-2xl"
                />
            </Pressable>
            

           </PagerView>
        </View>

        <View className="w-full flex-row border px-4 border-slate-500 h-14 rounded-full items-center gap-2 bg-transparent">
            <Feather name="search" size={24} color="#64748b"/>

            <TextInput 
                placeholder="Faça sua busca aqui..."
                className="w-full h-full flex-1 bg-transparent"
                />
           </View>
    </View>
    )
}