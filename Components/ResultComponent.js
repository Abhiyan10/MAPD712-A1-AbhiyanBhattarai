import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ResultComponent({ value }) {
  return (
    <View>
      <Text style={style.bmifield}>Your BMI:</Text>

      <Text style={style.resultField}>{value}</Text>
    </View>
  );
}
const style = StyleSheet.create({
  resultField: {
    borderWidth: 1,
    margin: 5,
    fontSize: 25,
  },
  bmifield: {
    fontSize: 20,
  },
});
