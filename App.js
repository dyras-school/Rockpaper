import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {useState } from "react";

export default function App() {
  
  const [textInputValue, setTextInputValue] = useState('')

  const handleTextChange = (text) => {
    setTextInputValue(text);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sten sax påse</Text>
      <View style={styles.direction}>
      <Button title="Sten" style={styles.button} onPress={() => {}}></Button>
      <Button title="Sax" style={styles.button} onPress={() => {}}></Button>

      <Button title="Påse" style={styles.button} onPress={() => {}}></Button>

      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }, direction: {
    flexDirection: 'row'
  }, title: {
    marginTop: 50,
    fontSize: 30
  }, textinput: {
    width: '70%',
    marginHorizontal: 20,
    paddingHorizontal: 10
  }, button: {
    marginBottom: 20,
    padding: 30
  }
});