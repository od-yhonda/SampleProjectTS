import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.ref = {};
  }

  onPress = () => {
    this.props.onPress(this.ref._lastNativeText);
    this.ref.setNativeProps({ text: "" });
  };

  render() {
    const { onPress } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          ref={ref => {
            this.ref = ref;
          }}
        />
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.buttonText}>追加</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20
  },
  textInput: {
    flex: 3,
    backgroundColor: "#FFF",
    marginRight: 5
  },
  button: {
    flex: 1,
    backgroundColor: "#008080",
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "500"
  }
});