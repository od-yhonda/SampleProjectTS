import { createStackNavigator, createAppContainer } from "react-navigation";

import App from "./App";
import SampleComponent from "./components/SampleComponent";

const AppNavigator = createStackNavigator(
  {
    Home: App,
    SampleComponent: SampleComponent
  },
  {
    initialRouteName: "Home"
  }
);

export default AppNavigator;
