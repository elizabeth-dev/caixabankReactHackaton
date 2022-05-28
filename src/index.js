import { AppRegistry } from 'react-native';
import App from './App';
import appData from './app.json';

AppRegistry.registerComponent(appData.name, () => App);
AppRegistry.runApplication(appData.name, {
	rootTag: document.getElementById('root'),
});
