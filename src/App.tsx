/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import AppNavigator from "./AppNavigator";

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <SafeAreaView>
          <StatusBar barStyle="dark-content" />
          <AppContainer />
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default App;
