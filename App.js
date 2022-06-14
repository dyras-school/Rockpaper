import {StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import {useState } from "react";

export default function App() {
  
const [textInputValue, setTextInputValue] = useState('');
const [text, setText] = useState('');

const [playerWins, setPlayerWins] = useState(0)
const [enemyWins, setEnemyWins] = useState(0)

const renderWin = () => {
  var playerChoice = textInputValue;
  playerChoice = playerChoice.toLowerCase();
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
  
    setText("Du gjorde " + playerChoice + " och motståndaren gjorde " + enemyStringChoice + ". Det innebär att det blev lika!")
    
}
else if (playerChoice == "sten" && enemyStringChoice == "sax" || playerChoice == "sax" && enemyStringChoice == "påse" || playerChoice == "påse" && enemyStringChoice == "sten")
{
  setText("Du gjorde " + playerChoice + " och motståndaren gjorde " + enemyStringChoice + ". Det innebär att du vann!")
  setPlayerWins(playerWins+1)
} else {
  
  setText("Du gjorde " + playerChoice + " och motståndaren gjorde " + enemyStringChoice + ". Det innebär att du förlorade!")
  setEnemyWins(enemyWins+1)

}
}

const handleTextChange = (text) => [
  setTextInputValue(text)
]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sten sax påse!</Text>
      <View style={styles.direction}>
      <TextInput
        style={styles.textinput}
        onChangeText={handleTextChange}
        value={textInputValue}
        placeholder="Skriv sten, sax eller påse!"
      />
      <Button title="Val" onPress={() => renderWin()}></Button>
      </View>
      <View>
        <Text>{text}</Text>
        <Text>Resultat: {playerWins} - {enemyWins}</Text>
      </View>
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