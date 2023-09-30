import { useState } from "react";
import { StyleSheet, View, Button, Text, Alert } from "react-native";
export default function ButtonComponent({
  metricViewClick,
  standardViewClick,
}) {
  return (
    <View>
      <Button onPress={standardViewClick} title="Standard"></Button>
      <Button onPress={metricViewClick} title="Metric"></Button>
    </View>
  );
}
