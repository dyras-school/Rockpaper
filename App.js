import {StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import {useState } from "react";

export default function App() {
  
const [textInputValue, setTextInputValue] = useState('');
const [choiceList, setPlayerChoiceList] = useState([])
const [enemyValue, setEnemyValue] = useState('');
const [enemyList, setEnemyList] = useState([])

const _renderItem = ({item: playerChoice}) => {
  var enemyChoice = Math.floor(Math.random() * 3) + 1 ;
  var enemyStringChoice;
  if (enemyChoice == 1) {
    enemyStringChoice = "sten";
  }
  else if (enemyChoice == 2 ){
    enemyStringChoice = "sax";
  } else{
  enemyStringChoice = "påse";
}
if ( playerChoice == enemyStringChoice){
  return (
    <Text>{"Du gjorde"} {playerChoice} {"och motståndaren gjorde"} {enemyStringChoice}{" - Det innebär att det blev lika!"}</Text>
  )
}
else if (playerChoice == "sten" && enemyStringChoice == "sax" || playerChoice == "sax" && enemyStringChoice == "påse" || playerChoice == "påse" && enemyStringChoice == "sten")
{
return (
  <Text>{"Du gjorde"} {playerChoice} {"och motståndaren gjorde"} {enemyStringChoice} {"- Det innebär att du vann!"}</Text>
)} else {
  return (
<Text>{"Du gjorde"} {playerChoice} {"och motståndaren gjorde"} {enemyStringChoice} {"- Det innebär att du förlorade!"}</Text>
)
}
}

const handleTextChange = (text) => [
  setTextInputValue(text)
  
]

const handleAdd = () => {
  setPlayerChoiceList(prev => prev.concat(textInputValue))

}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sten sax påse!</Text>
      <View style={styles.direction}>
      <TextInput
        style={styles.textinput}
        onChangeText={handleTextChange}
        value={textInputValue}
        placeholder="Skriv Sten, Sax eller Påse!"
      />
      <Button title="Val" onPress={handleAdd}></Button>
      </View>
      <FlatList
      data={choiceList}
      renderItem={_renderItem}
      keyExtractor={(item, index) => index}
      />
      <StatusBar style="auto" />
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