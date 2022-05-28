import { Platform, StyleSheet } from 'react-native';

export const LogoStyles = StyleSheet.create({
	root: {
		flexDirection: 'row',
		// For some reason, align-items: baseline behaves weirdly on native platforms, didn't have time to investigate
		alignItems: Platform.OS === 'web' ? 'baseline' : 'center',
	},
	text: {
		fontFamily: 'Montserrat700',
		fontSize: 30,
		letterSpacing: 0.25,
		color: '#4a35C5',
		marginLeft: 1,
	},
});
