import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import ConvertorButton from "./components/button";
import { CurrencyPerRupee } from "./constants/currencys";

export default function App() {
  const [state, setstate] = useState({
    resultValue: "0.0",
    resultUnit: "",
    inputValue: "",
  });

  const { resultValue, resultUnit, inputValue } = state;

  const onPress = (val, symbol) => {
    if (inputValue === "") {
      Alert.alert("Enter Some Amount!");
      setstate({ inputValue: "", resultUnit: "", resultValue: "0.0" });
    } else {
      setstate({
        resultValue: (Math.floor(inputValue) * val).toFixed(2),
        resultUnit: symbol,
        inputValue,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={[styles.textContainer]}>
          <Text style={[styles.boxFont, { marginTop: 20, color: "white" }]}>
            {resultValue + " " + resultUnit}
          </Text>
        </View>
        <View
          style={[
            styles.textContainer,
            { backgroundColor: "white", flexDirection: "row" },
          ]}
        >
          <TextInput
            keyboardType="numeric"
            style={[styles.boxFont, { flex: 6 }]}
            value={inputValue}
            placeholder="Enter Amount ₹"
            onChangeText={(inputValue) =>
              setstate({ resultValue, resultUnit, inputValue })
            }
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {Object.values(CurrencyPerRupee).map((curr) => {
          return (
            <ConvertorButton
              onPress={() => {
                onPress(curr.val, curr.symbol);
              }}
              symbol={curr.symbol}
              key={curr.symbol}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
}
// <Text style={[styles.boxFont, {flex:1}]}>INR</Text>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3335",
  },
  textContainer: {
    flex: 1,
    color: "black",
    justifyContent: "center",
    alignItems: "stretch",
    paddingRight: 3,
  },
  boxFont: {
    fontSize: 30,
    textAlign: "right",
  },
  buttonContainer: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
});
