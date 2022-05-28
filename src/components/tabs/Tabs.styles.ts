import { StyleSheet } from 'react-native';

export const TabsStyles = StyleSheet.create({
	root: {
		flexDirection: 'row',
		alignSelf: 'stretch',
	},
	tab: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: 8,
		paddingHorizontal: 24,
	},
	activeTab: {
		borderBottomColor: '#6979f8',
		borderBottomWidth: 5,
		borderStyle: 'solid',
	},
	inactiveTab: {
		opacity: 0.5,
	},
	tabText: {
		fontFamily: 'Montserrat400',
		fontSize: 12,
		color: '#6979f8',
	},
});
