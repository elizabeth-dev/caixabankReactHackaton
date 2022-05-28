import { StyleSheet } from 'react-native';

export const HeaderStyles = StyleSheet.create({
	topbar: {
		padding: 32,
		backgroundColor: '#ffffff',
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	subTopbar: {
		paddingVertical: 18,
		paddingHorizontal: 16,
		backgroundColor: '#f5f5f5',
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	subtitle: {
		fontFamily: 'Montserrat400',
		fontSize: 14,
		letterSpacing: 0.25,
		color: '#000000',
	},
});
