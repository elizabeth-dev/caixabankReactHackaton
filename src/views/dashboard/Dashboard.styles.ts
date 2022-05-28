import { Dimensions, StyleSheet } from 'react-native';

export const DashboardStyles = StyleSheet.create({
	root: {
		height: Dimensions.get('window').height,
		flex: 1,
		backgroundColor: '#f2f6f9',
	},
	header: {
		marginHorizontal: 18,
		marginTop: 18,
	},
	counters: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: 18,
		marginHorizontal: 24,
	},
	graphSurface: {
		marginVertical: 18,
		marginHorizontal: 24,
		paddingVertical: 16,
		paddingHorizontal: 16,
		alignItems: 'flex-start',
	},
	graphTitle: {
		fontFamily: 'Montserrat600',
		fontSize: 15,
		color: '#151522',
	},
	graphTabs: {
		marginVertical: 12,
	},
	navbar: {
		marginHorizontal: 16,
	},
});
