import React from 'react';
import { Text, View } from 'react-native';
import { AreaGraph } from '../../components/area-graph/AreaGraph';
import { Counter } from '../../components/counter/Counter';
import { Header } from '../../components/header/Header';
import { PieGraph } from '../../components/pie-graph/PieGraph';
import { Surface } from '../../components/surface/Surface';
import { ArrowSvg } from '../../shared/svg/ArrowSvg';
import { DotSvg } from '../../shared/svg/DotSvg';
import { DashboardStyles } from './Dashboard.styles.web';

const data1 = [
	{ value: 40, color: '#9013fe', tag: 'Screens' },
	{ value: 83, color: '#007aff', tag: 'PCs' },
	{ value: 60, color: '#fb8832', tag: 'Phones' },
	{ value: 30, color: '#e6e5e6', tag: 'Other' },
];

const data2 = [
	{ value: 50, label: 'Mon' },
	{ value: 10, label: 'Tue' },
	{ value: 40, label: 'Wed' },
	{ value: 95, label: 'Thu' },
	{ value: 40, label: 'Fri' },
	{ value: 24, label: 'Sat' },
	{ value: 85, label: 'Sun' },
];

export const DashboardView: React.FC = () => {
	return (
		<View style={DashboardStyles.root}>
			<Header />
			<View style={DashboardStyles.content}>
				<View style={{ marginRight: 8, flex: 1 }}>
					<View style={DashboardStyles.counters}>
						<Counter title="Transactions" subtitle="Last Month" style={{ marginRight: 16, flex: 1 }}>
							35
						</Counter>
						<Counter title="Transactions" subtitle="Today" style={{ marginLeft: 16, flex: 1 }}>
							3
						</Counter>
					</View>
					<Surface style={DashboardStyles.graphSurface}>
						<View style={DashboardStyles.graphHeader}>
							<Text style={DashboardStyles.graphTitle}>Conversion</Text>
						</View>
						<PieGraph style={DashboardStyles.graph} data={data1} />
						<View style={DashboardStyles.graphLegend}>
							{data1.map(({ tag, color }, i) => (
								<View
									key={i}
									style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 12 }}>
									<DotSvg color={color} />
									<Text style={DashboardStyles.graphLabel}>{tag}</Text>
								</View>
							))}
						</View>
					</Surface>
				</View>
				<Surface style={DashboardStyles.graph2Surface}>
					<View style={DashboardStyles.graphHeader}>
						<Text style={DashboardStyles.graphTitle}>Weekly expenses</Text>
					</View>
					<AreaGraph data={data2} />
					<View style={DashboardStyles.ticker}>
						<Text style={DashboardStyles.tickerTitle}>Total Revenue</Text>
						<Text style={DashboardStyles.tickerValue}>$76685.41</Text>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<ArrowSvg color={'#4aaf05'} />
							<Text style={DashboardStyles.tickerDelta}>7.00%</Text>
						</View>
					</View>
				</Surface>
			</View>
		</View>
	);
};
