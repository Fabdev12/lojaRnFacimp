import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { TopHeader } from '../Home/Header';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../../contexts/CartContext';

export default function ProductDetails({ route }) {
  const { product } = route.params;
  const navigation = useNavigation();
  const {addItemCart} = useContext(CartContext)
  

  return (

    <View>
      <View className="w-full flex flex-row items-center justify-between px-4">
        <TopHeader/>
      </View>
      <View className="flex mt-3 px-[19px] w-full" style={{backgroundSize: 'cover'}}>
        <Image source={{ uri: product.images[0] }} className="w-[350px] h-[422] rounded-2xl flex mb-2"/>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }} numberOfLines={3}>{product.title}</Text>
        <Text className="font-bold mt-4 text-2xl">R$ {product.price}</Text>
        <Text className="mt-3 items-center justify-center w-full" numberOfLines={3}>{product.description}</Text>
      </View>

      <View className="flex items-center mt-6 w-full">
        <TouchableOpacity 
            onPress={() =>  addItemCart(product)} 
            className="bg-[#004832] py-4 flex items-center justify-center rounded-lg w-[335px]"
          >
          <Text className="text-white text-lg font-bold">Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
