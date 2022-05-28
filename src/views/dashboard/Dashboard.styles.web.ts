import { StyleSheet } from 'react-native';

export const DashboardStyles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	content: {
		flexDirection: 'row',
		paddingVertical: 24,
		paddingHorizontal: 16,
	},
	counters: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 8,
	},
	graphSurface: {
		marginTop: 8,
		paddingHorizontal: 32,
		paddingVertical: 32,
		alignItems: 'center',
		flex: 1,
	},
	graphHeader: {
		alignSelf: 'stretch',
		flexDirection: 'row',
	},
	graphTitle: {
		fontFamily: 'Montserrat700',
		fontSize: 24,
		color: '#333333',
	},
	graph: {
		width: '100%',
		aspectRatio: 1,
		margin: 32,
	},
	graphLegend: {
		flexDirection: 'row',
		fontFamily: 'Montserrat400',
		fontSize: 12,
		color: '#9c9c9c',
	},
	graphLabel: {
		fontFamily: 'Montserrat400',
		fontSize: 12,
		color: '#9c9c9c',
		marginLeft: 4,
	},
	graph2Surface: {
		paddingHorizontal: 32,
		paddingVertical: 32,
		marginLeft: 8,
		flex: 3,
		alignItems: 'flex-start',
	},
	graph2: {
		height: '100%',
		width: '100%',
	},
	ticker: {
		alignItems: 'flex-start',
	},
	tickerTitle: {
		fontFamily: 'Montserrat400',
		fontSize: 12,
		color: '#9c9c9c',
		letterSpacing: 0.4,
	},
	tickerValue: {
		fontFamily: 'Montserrat700',
		fontSize: 24,
		color: '#333333',
	},
	tickerDelta: {
		fontFamily: 'Montserrat400',
		fontSize: 12,
		letterSpacing: 0.4,
		color: '#4aaf05',
		marginLeft: 4,
	},
});
