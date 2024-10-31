import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [text, onChangeText] = useState("hola");

  return (
    <View style={styles.container}>

      <TextInput
        value={text}
        onChangeText={onChangeText}
        style={styles.textInput}>
      </TextInput>
      
      <Text style={styles.text} > {text} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 200,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 15, 
  },
  text: {
    fontWeight: 'bold',
    color: '#AB274F',
    fontSize: 18,
  },
});
