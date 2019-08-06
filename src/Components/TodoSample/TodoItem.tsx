import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TodoButton from "./TodoButton";

interface TodoItemProps {
  text: String;
  onDone: (index: number) => void;
  onDelete: (index: number) => void;
  done: boolean;
}

const TodoItem = (props: TodoItemProps) => {
  const { text, onDone, onDelete, done } = props;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TodoButton onPress={onDone}>{done ? "Undo" : "Done"}</TodoButton>
        <Text style={[styles.text, done && styles.doneText]}>{text}</Text>
      </View>
      <TodoButton style={styles.deleteButton} onPress={onDelete}>
        Delete
      </TodoButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
    minHeight: 50,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    color: "#333"
  },
  doneText: {
    textDecorationLine: "line-through"
  },
  deleteButton: {
    backgroundColor: "#800000"
  },
  left: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default TodoItem;
