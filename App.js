import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonComponent from "./Components/ButtonComponent";
import StandardCalculator from "./Components/StandardCalculator";
import MetricCalculator from "./Components/MetricCalculator";
import ResultComponent from "./Components/ResultComponent";
export default function App() {
  const [currentView, setCurrentView] = useState("standard");
  const [value, setValue] = useState("");
  const standardViewClick = () => {
    setCurrentView("standard");
    setValue("");
  };
  const metricViewClick = () => {
    setCurrentView("metric");
    setValue("");
  };
  const submitValue = (value) => {
    setValue(value);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>BMI Calculator</Text>
      <ButtonComponent
        metricViewClick={metricViewClick}
        standardViewClick={standardViewClick}
      />
      {currentView === "standard" ? (
        <StandardCalculator submitValue={submitValue} />
      ) : (
        <MetricCalculator submitValue={submitValue}></MetricCalculator>
      )}
      <ResultComponent value={value} />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
  },
});
