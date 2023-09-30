import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
export default function MetricCalculator({ submitValue }) {
  const [inputValue, setInputValue] = useState({
    "height in m": "",
    "weight in kg": "",
  });
  const onChangeHandler = (text, name) => {
    setInputValue({ ...inputValue, [name]: text });
  };
  const calculateBmi = () => {
    const heightinCM = parseInt(inputValue["height in cm"]);
    const weightKg = parseInt(inputValue["weight in kg"]);
    const bmi = (weightKg / heightinCM / heightinCM) * 10000;
    submitValue(bmi.toFixed(2));
  };
  return (
    <View>
      <Text>Your Height</Text>
      <TextInput
        style={style.inputField}
        placeholder="Your Height (in cm):"
        name="height in cm"
        value={inputValue["height in cm"]}
        onChangeText={(text) => onChangeHandler(text, "height in cm")}
      ></TextInput>
      <Text>Your Weight</Text>
      <TextInput
        style={style.inputField}
        placeholder="Your Wright in KG:"
        name="weight in kg"
        value={inputValue["weight in kg"]}
        onChangeText={(text) => onChangeHandler(text, "weight in kg")}
      ></TextInput>
      <Button title="Calculate" onPress={calculateBmi}></Button>
    </View>
  );
}

const style = StyleSheet.create({
  inputField: {
    borderWidth: 1,
  },
});
