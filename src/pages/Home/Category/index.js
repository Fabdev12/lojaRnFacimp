import { View, Text,FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: '1',
        imageUrl: require('../../../assets/all.png'),
        title: 'Ver todas',
        next: 'SeeAll'
    },
    {
        id: '2',
        imageUrl: require('../../../assets/cat2.png'),
        title: 'Feminino',
        next: 'Feminine'
    },
    {
        id: '3',
        imageUrl: require('../../../assets/cat1.png'),
        title: 'Masculino',
        next: 'Masculine'
    },
    {
        id: '4',
        imageUrl: require('../../../assets/cat3.png'),
        title: 'Eletrônicos',
        next: 'Eletronics'
    },
    {
        id: '5',
        imageUrl: require('../../../assets/cat4.png'),
        title: 'Acessórios',
        next: 'Acessories'
    },
    
];

export default function Category() {
    const navigation = useNavigation()
  return (
    <View className="w-full h-50 mt-3 mb-3 flex flex-col">
        <Text className="text-xl mb-1 font-semibold">Categorias</Text>
        <FlatList
            data={data}
            contentContainerStyle={{gap:8}}
            keyExtractor={(item) => item.id}
            horizontal={true} // Definindo a lista como horizontal
            renderItem={({ item }) => (
            <Pressable 
            onPress={() => navigation.navigate(item.next)}
            className="flex items-center justify-center "
            >
                <Image source={item.imageUrl} className='w-24 h-24 rounded-full'/>
                <Text>{item.title}</Text>
            </Pressable>
            )}
            showsHorizontalScrollIndicator={false} // Ocultar a barra de rolagem horizontal
       />
    </View>
  )
}
