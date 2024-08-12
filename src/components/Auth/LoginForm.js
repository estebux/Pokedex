import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, Keyboard } from 'react-native'


export default function LoginForm() {
  return (
    <View>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <TextInput 
        placeholder="Nombre de usuario"
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        textAlign:"center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15
    }

})