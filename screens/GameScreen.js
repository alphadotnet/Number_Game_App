import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import NumberConstainer from "../components/game/NumberConstainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import IntroductionText from "../components/ui/IntroductionText";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let maxNumber = 100;
let minNumber = 1;
function GameScreen({ userNumber, onGameOver }) {
  const initialNumber = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialNumber);
  const [guessRounds, setGuessRounds] = useState([initialNumber]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minNumber = 1;
    maxNumber = 100;
  }, []);

  // set up Button "+" hoặc "-"
  function nextGuessHandler(direction) {
    // direction => "lower" or "greater"
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Chọn sai!", "Vui lòng chọn lại...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minNumber,
      maxNumber,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLenght = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Dự đoán của bạn</Title>
      <NumberConstainer>{currentGuess}</NumberConstainer>
      <Card>
        <IntroductionText style={styles.introductionText}>
          Thấp hơn hoặc Cao hơn?
        </IntroductionText>
        <View style={styles.viewInput}>
          <View style={styles.viewButtonInput}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <MaterialIcons name="remove" size={24} color="black" />
            </PrimaryButton>
          </View>
          <View style={styles.viewButtonInput}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <MaterialIcons name="add" size={24} color="black" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* // Dùng hiển thị Danh sách các con số đã xuất hiện */}
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLenght - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    marginTop: 50,
  },
  viewInput: {
    flexDirection: "row",
  },
  viewButtonInput: {
    flex: 1,
  },
  textNote: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 20,
    fontWeight: "bold",
  },
  introductionText: {
    marginBottom: 10,
  },
  listContainer:{
    flex: 1,
    pading: 12,
  }
});
