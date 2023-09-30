import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ResultComponent({ value }) {
  return (
    <View>
      <Text>Your BMI:</Text>
      <Text>{value}</Text>
    </View>
  );
}
const style = StyleSheet.create({
  inputField: {
    borderWidth: 1,
  },
});
