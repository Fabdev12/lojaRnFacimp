import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Banner3() {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {

    axios.get('https://fakestoreapi.in/api/products/category?type=mobile')
      .then(response => setProducts(response.data.products))
      .catch(error => console.log(error));
    
  }, []);

  // Função para renderizar cada item
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails2', { product: item })}
      className="flex-1 px-2 mb-3"
      >
      <View className="p-4 items-center max-h-96 min-h-80 bg-white rounded-lg">
        <Image source={{ uri: item.image }} className="w-48 h-48 rounded-xl" style={{ resizeMode: 'contain' }}/>
        <Text className="mt-2 font-medium" numberOfLines={2}>{item.title}</Text>
        <Text className="text-xl">R$ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 px-1">
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingTop: 20 }}
      />
    </View>
  );
}
