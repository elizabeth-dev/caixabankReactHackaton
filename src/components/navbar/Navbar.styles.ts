import { StyleSheet } from 'react-native';

export const NavbarStyles = StyleSheet.create({
	root: {
		backgroundColor: '#2d14c4',
		borderRadius: 31,
		flexDirection: 'row',
	},
	tab: {
		paddingVertical: 22,
		flex: 1,
		alignItems: 'center',
	},
	activeTab: {},
	inactiveTab: {
		opacity: 0.53,
	},
});
