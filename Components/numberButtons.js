import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacityButton } from "./AllButtons";

// This component renders all the number and function buttons for the calculator
export const NumberButtons = ({ updateCalculation }) => {
  // Define the buttons in rows, so we can easily display them in a grid
  const buttonRows = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["9", ".", "Del"],
    ["=", "Clear"],
  ];

  return (
    <View>
      {/* Loop through each row of buttons */}
      {buttonRows.map((row, rowIndex) => (
        <View style={styles.rowcontainer} key={rowIndex}>
          {/* Loop through each button in the row */}
          {row.map((btnText) => (
            <TouchableOpacityButton
              key={btnText}
              text={btnText}
              // When a button is pressed, call updateCalculation with the right value
              // If 'Del' is pressed, send 'del'
              // If 'Clear' is pressed, send 'clear'
              // Otherwise, send the button text (number or symbol)
              onPress={() =>
                updateCalculation(
                  btnText === "Del"
                    ? "del"
                    : btnText === "Clear"
                    ? "clear"
                    : btnText
                )
              }
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  rowcontainer: {
    flexDirection: "row", // Arrange buttons in a row
    alignContent: "flex-start",
    flexWrap: "wrap", // Allow wrapping if needed
  },
});
