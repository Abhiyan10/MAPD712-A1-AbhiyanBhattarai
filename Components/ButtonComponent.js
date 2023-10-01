import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
export default function ButtonComponent({
  metricViewClick,
  standardViewClick,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnField} onPress={standardViewClick}>
        <Text>Standard System</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnField} onPress={metricViewClick}>
        <Text>Metric System</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnField: {
    borderWidth: 1,
    margin: 5,
    padding: 12,
    fontSize: 30,
    fontWeight: 10,
  },
  container: {
    flexDirection: "row",
  },
});
