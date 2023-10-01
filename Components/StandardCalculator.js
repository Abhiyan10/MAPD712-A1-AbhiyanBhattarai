import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useState } from "react";
export default function StandardCalculator({ submitValue }) {
  const [inputValue, setInputValue] = useState({
    "height feet": "",
    "height inch": "",
    "weight lb": "",
  });
  const onChangeHandler = (text, name) => {
    setInputValue({ ...inputValue, [name]: text });
  };
  const calculateBMI = () => {
    const heightFeet = parseInt(inputValue["height feet"]);
    const heightInch = parseInt(inputValue["height inch"]);
    const weightLb = parseInt(inputValue["weight lb"]);
    const totalInches = heightFeet * 12 + heightInch;
    const bmi = (weightLb / (totalInches * totalInches)) * 703;
    submitValue(bmi.toFixed(1));
  };
  return (
    <View>
      <Text style={style.titlefield}>Enter Height in ft and in</Text>
      <TextInput
        style={style.inputField}
        placeholder="                 Height (ft):"
        name="height feet"
        value={inputValue.heightInFt}
        onChangeText={(text) => onChangeHandler(text, "height feet")}
      ></TextInput>
      <TextInput
        placeholder="                 Height (in):"
        name="height inch"
        value={inputValue["height inch"]}
        onChangeText={(text) => onChangeHandler(text, "height inch")}
        style={style.inputField}
      ></TextInput>
      <Text style={style.weightfield}>Enter Weight in lb</Text>
      <TextInput
        placeholder="                 Weight:"
        name="weight lb"
        value={inputValue["weight lb"]}
        onChangeText={(text) => onChangeHandler(text, "weight lb")}
        style={style.inputField}
      ></TextInput>
      <Button title="Calculate" onPress={calculateBMI}></Button>
    </View>
  );
}

const style = StyleSheet.create({
  inputField: {
    borderWidth: 2,
    margin: 10,
    fontSize: 20,
  },
  titlefield: {
    fontSize: 25,
  },
  weightfield: {
    fontSize: 25,
  },
});
