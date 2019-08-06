import { createStackNavigator } from "react-navigation";

import Home from "./components/Home";
import SampleComponent from "./components/SampleComponent";
import TodoSample from "./components/TodoSample/TodoSample";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    SampleComponent: SampleComponent,
    TodoSample: TodoSample
  },
  {
    initialRouteName: "Home"
  }
);

export default AppNavigator;
