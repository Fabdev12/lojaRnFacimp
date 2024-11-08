import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import {useState} from 'react'
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'



export default function Register() {

  const navigation = useNavigation()




  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Faça seu cadastro</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>

        <Text style={styles.title}>Nome</Text>
        <TextInput placeholder='Digite seu nome...' style={styles.input} />

        <Text style={styles.title}>Email</Text>
        <TextInput placeholder='Digite um email...' style={styles.input} />

        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder='Digite uma senha com 6 números...' style={styles.input}  secureTextEntry/>

        <Text style={styles.title}>Confirme sua senha</Text>
        <TextInput placeholder='Confirme sua senha...' style={styles.input} secureTextEntry/>

        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate ('Home')} }>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

      </Animatable.View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#004832'
  },
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm:{
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd:'5%'
  },
  title:{
    fontSize: 20,
    marginTop: 28
  },
  input:{
    borderBottomWidth: 0.5,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  }, 
  button:{
    backgroundColor: '#004832',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister:{
    marginTop: 14,
    alignSelf: 'center'
  },
  registerText:{
    color: '#004832'
  }
})