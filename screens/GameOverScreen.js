import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  if(width < 300){
    imageSize = 150;
  }

  if(height <400){
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
      <Title>TRÒ CHƠI KẾT THÚC!</Title>
      <View
        style={[
          styles.imageContainer,imageStyle,
        ]}
      >
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        ></Image>
      </View>
      <Text style={styles.summaryText}>
        Điện thoại của bạn cần{" "}
        <Text style={styles.heightlightText}>{roundsNumber}</Text> vòng để đoán
        số <Text style={styles.heightlightText}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>
        Bắt đầu trò chơi mới
      </PrimaryButton>
    </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen:{
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    overflow: "hidden",
    marginTop: 30,
    borderWidth: 3,
    borderColor: Colors.primary700,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans-regular",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  heightlightText: {
    fontFamily: "open-sans",
    color: Colors.accent300,
  },
});
