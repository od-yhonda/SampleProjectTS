import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";

interface HomeProps {
  navigation: NavigationScreenProps;
}

export default class Home extends React.Component<HomeProps> {
  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.button} title="sample" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008080"
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
