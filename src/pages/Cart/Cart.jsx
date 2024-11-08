import React, { useContext, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { CartContext } from '../../contexts/CartContext';

export default function Cart({data}) {
    const route = useRoute();
    const { product } = route.params || {}; 
    const {cart, removeItemCart, toAddItemCart, getTotalItems, getTotalPrice} = useContext(CartContext)
  
    return (
      <ScrollView className="p-4 flex-1 ">
          {cart.length === 0 ? (
              <View className="items-center justify-center flex-1">
                  <Text className="text-lg font-bold text-gray-700 mb-10 mt-10">Seu carrinho está vazio...</Text>
              </View>
          ) : (
              <>
                  {cart.map((item) => (
                      <View key={item.id} className="flex-row items-center justify-between bg-white p-4 rounded-lg mb-4 shadow-md">
                          <Image source={{ uri: item.image || item.images[0] }} className="w-16 h-16 rounded-lg mr-4" />

                          <View className="flex-1 mx-2">
                              <Text className="font-bold text-lg mb-2" numberOfLines={1}>{item.title}</Text>
                              <Text className="text-gray-700 text-lg">R$ {item.price}</Text>
                          </View>

                          <View className="flex-col items-center justify-center">
                              <TouchableOpacity onPress={() => removeItemCart(item)} className="px-2 bg-[#004832] h-10 w-10 justify-center items-center rounded-lg">
                                  <Text className="text-2xl text-white">-</Text>
                              </TouchableOpacity>

                              <Text className="m-2 text-lg">{item.amount}</Text>

                              <TouchableOpacity onPress={() => toAddItemCart(item)} className="px-2 bg-[#004832] h-10 w-10 justify-center items-center rounded-lg">
                                  <Text className="text-2xl text-white">+</Text>
                              </TouchableOpacity>
                          </View>
                      </View>
                  ))}
              </>
          )}
          <View className="p-4 bg-white border-t border-gray-200 rounded-lg">
            <Text className="text-lg font-bold mt-[-5]">
                Total de itens no carrinho: {getTotalItems()}
            </Text>
            <Text className="text-lg font-bold mt-1">
                Valor total: R$ {getTotalPrice().toFixed(2)}
            </Text>

            <TouchableOpacity className="bg-[#004832] py-4 mt-3 rounded-lg items-center mb-4">
                <Text className="text-white text-lg font-bold">Finalizar Compra</Text>
            </TouchableOpacity>
            </View>
      </ScrollView>

    

  );
}