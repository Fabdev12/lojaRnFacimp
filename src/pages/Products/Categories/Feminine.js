import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Feminine() {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {

    axios.get("https://fakestoreapi.com/products/category/women's clothing")
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
    
  }, []);

  // Função para renderizar cada item
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails2', { product: item })}
      className="w-1/2 px-2 mb-3"
      >
      <View className="p-4 items-center bg-white rounded-lg max-h-96 min-h-80 justify-center">
        <Image source={{ uri: item.image }} className="w-48 h-48 rounded-xl" style={{ resizeMode: 'contain' }}/>
        <Text className="mt-2 font-medium text-center" numberOfLines={2}>{item.title}</Text>
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