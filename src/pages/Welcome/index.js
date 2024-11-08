import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Welcome() {

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>

        {/* Terceira camada: imagem de fundo */}
        <Image 
          source={{ uri: 'https://thumb.braavo.me/sthommes/0/1233018150.webp' }} 
          style={styles.backgroundImage} 
          resizeMode="cover" 
        />

        {/* Segunda camada: overlay semi-transparente verde */}
        <View style={styles.overlay} />

        {/* Primeira camada: texto com fadeInLeft */}
        <Animatable.View animation="fadeInLeft" duration={1000} style={styles.textContainer}>
          <Text style={styles.text}>Moda que</Text>
          <Text style={styles.text}>
            <Text style={styles.boldText}>combina</Text> com
          </Text>
          <Text style={styles.text}>
            <Text style={styles.boldText}>você</Text>.
          </Text>
          <Text style={styles.text}>Explore nossas</Text>
          <Text style={styles.text}>coleções</Text>
        </Animatable.View>
        
      </View>

      <View  style={styles.containerForm}>
        <Text style={styles.textContent}>Faça o login para começar</Text>

        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View >
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  containerLogo:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    position: 'relative', 
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 72, 50, 0.6)', // Verde com transparência
    zIndex: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  textContainer: {
    position: 'absolute',
    paddingHorizontal: '10%',
    alignItems: 'flex-start',
    zIndex:2,
    margin: -70 
  },
  text: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'left',
    marginBottom: 8,
    marginLeft: -30
  },
  boldText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  textContent:{
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 50,
    marginLeft: 17
  },
  containerForm:{
    flex: 1,
    backgroundColor: '#004832',
    paddingStart: '5%',
    paddingEnd: '5%',
    marginTop: -30,
    zIndex: -1
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: '#fff',
  },
  button:{
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  buttonText:{
    fontSize: 18,
    color: '#004832',
    fontWeight: 'bold',
  }
});