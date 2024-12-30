import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setOsGameOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);

  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  if(!fontLoaded) {
    return <AppLoading />;
  }

  function setUserNumberHandler(enteredNumber) {
    setUserNumber(enteredNumber);
    setOsGameOver(false);
  }

  function gameOverHandler(guessNumberGame) {
    setOsGameOver(true);
    setRoundsNumber(guessNumberGame);
  }

  function startNewGameHandler() {
    setRoundsNumber(0);
    setUserNumber(null);
  }

  let screen = <StartGameScreen onPickNumber={setUserNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (isGameOver && userNumber) {
    screen = <GameOverScreen roundsNumber={roundsNumber} userNumber={userNumber} onStartNewGame={startNewGameHandler}/>;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent300]}
      style={styles.rootViewColor}
    >
      <ImageBackground
        source={require("./assets/images/dices.jpg")}
        resizeMode="cover"
        style={styles.rootViewColor}
        imageStyle={styles.ImageBackground}
      >
        <SafeAreaView style={styles.rootViewColor}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootViewColor: {
    flex: 1,
  },
  ImageBackground: {
    opacity: 0.25,
  },
});
