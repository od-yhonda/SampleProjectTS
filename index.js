/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SampleComponent from './src/Components/SampleComponent';

AppRegistry.registerComponent(appName, () => SampleComponent);
