import { TextInput, View, StyleSheet, Button, Alert, Text } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import IntroductionText from "../components/ui/IntroductionText";
function StartGameScreen({ onPickNumber }) {
  const [enterNumber, setEnterNumber] = useState("");

  function numberInputHandler(enterText) {
    setEnterNumber(enterText);
  }

  function confirmInputHandler() {
    const chooseNumber = parseInt(enterNumber);

    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert("Cảnh báo", "Vui lòng nhập một số từ 1 đến 99. Cảm ơn!!!", [
        { text: "Okey", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    onPickNumber(chooseNumber);
  }

  function resetInputHandler() {
    setEnterNumber("");
  }

  return (
    <View style={styles.rootContainer}>
      <Title>TRÒ CHƠI ĐOÁN SỐ</Title>
      <Card>
        <IntroductionText>HÃY NHẬP SỐ CỦA BẠN</IntroductionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enterNumber}
        />
        <View style={styles.viewInput}>
          <View style={styles.viewButtonInput}>
            <PrimaryButton onPress={resetInputHandler}>Đặt lại</PrimaryButton>
          </View>
          <View style={styles.viewButtonInput}>
            <PrimaryButton onPress={confirmInputHandler}>Xác nhận</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 55,
    width: 50,
    borderBottomColor: "#b1cc04",
    borderBottomWidth: 2,
    fontSize: 32,
    marginVertical: 8,
    fontWeight: "bold",
    color: "#b1cc04",
    textAlign: "center",
  },
  viewInput: {
    flexDirection: "row",
  },
  viewButtonInput: {
    flex: 1,
  },
});
