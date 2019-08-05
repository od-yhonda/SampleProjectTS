/**
 * Todo Sample
 */

import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

class TodoSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  delete = index => () => {
    const list = [].concat(this.state.list);
    list.splice(index, 1);

    this.setState({
      list
    });
  };

  done = index => () => {
    const list = [].concat(this.state.list);
    list[index].done = !list[index].done;

    this.setState({
      list
    });
  };

  onPress = text => {
    console.log(text);
    const list = [].concat(this.state.list);

    list.push({
      key: Date(),
      text: text,
      done: false
    });

    this.setState({
      list
    });
  };

  render() {
    const { list } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <TodoInput onPress={this.onPress} />
          <View style={styles.todoListContainer}>
            <FlatList
              style={styles.todoList}
              data={list}
              renderItem={({ item, index }) => (
                <TodoItem
                  onDone={this.done(index)}
                  onDelete={this.delete(index)}
                  {...item}
                />
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#333",
    paddingTop: 40
  },
  main: {
    flex: 1,
    maxWidth: 400,
    alignItems: "center"
  },
  todoListContainer: {
    flexDirection: "row",
    flex: 1
  },
  todoList: {
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default TodoSample;
