import { View, Text, Pressable,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Several() {
  const navigation = useNavigation()
 return (
   <View>
    <Text className="text-xl mb-1 font-semibold">Muito mais produtos</Text>
    <Pressable 
        className="w-full h-44 rounded-2xl"
        key="1"
        onPress={() => navigation.navigate('banner5')}
        >
        <Image 
        source={require("../../../assets/diversos.png")}
        className="w-full h-44 rounded-2xl"
        />
        </Pressable>
   </View>
  );
}