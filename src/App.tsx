/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import { createAppContainer } from "react-navigation";

import AppNavigator from "./AppNavigator";

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <SafeAreaView>
          <StatusBar barStyle="dark-content" />
          <View>
            <AppContainer />
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const style = StyleSheet.create({});

export default App;
