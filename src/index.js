import { AppRegistry } from 'react-native';
import App from './App';
import appData from './app.json';
import './index.css';

AppRegistry.registerComponent(appData.name, () => App);
AppRegistry.runApplication(appData.name, {
	rootTag: document.getElementById('root'),
});
