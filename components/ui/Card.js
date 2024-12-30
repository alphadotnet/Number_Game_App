import { Text, View, StyleSheet } from "react-native";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginTop: 100,
    backgroundColor: "#d12525",
    marginHorizontal: 20,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
