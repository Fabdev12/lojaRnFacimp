import { TopHeader } from "./Header";
import {Banner} from "./Banner"
import { View } from "react-native";
import Several from "./Several";
import TrendingTenis from "./TrendingTenis";

import {Constants} from 'expo-constants'
import Category from "./Category";


export function Home(){
    return(
        <View className="px-4 ">
            <TopHeader/>
            <Banner/>
            <Category/>
            <TrendingTenis/>
            <Several/>
        </View>
       
    )
}