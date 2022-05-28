/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme } from 'react-native';
import { DashboardView } from './views/dashboard/Dashboard.view';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<ScrollView contentInsetAdjustmentBehavior="automatic">
				<DashboardView />
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
