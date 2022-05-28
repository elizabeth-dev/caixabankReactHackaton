import React from 'react';
import { Text, View } from 'react-native';
import { Counter } from '../../components/counter/Counter';
import { Header } from '../../components/header/Header';
import { LineGraph } from '../../components/line-graph/LineGraph';
import { Navbar } from '../../components/navbar/Navbar';
import { Surface } from '../../components/surface/Surface';
import { Tabs } from '../../components/tabs/Tabs';
import { CompassSvg } from '../../shared/svg/CompassSvg';
import { GraphSvg } from '../../shared/svg/GraphSvg';
import { PersonSvg } from '../../shared/svg/PersonSvg';
import { DashboardStyles } from './Dashboard.styles';

const data = [
	{ value: 18, label: 'Jan' },
	{ value: 10, label: 'Feb' },
	{ value: 40, label: 'Mar' },
	{ value: 22, label: 'Apr' },
	{ value: 20, label: 'May' },
	{ value: 18, label: 'Jun' },
];

export const DashboardView: React.FC = () => {
	return (
		<View style={DashboardStyles.root}>
			<Header style={DashboardStyles.header} />
			<View style={DashboardStyles.counters}>
				<Counter title="Transactions" subtitle="Last Month" style={{ marginRight: 12 }}>
					35
				</Counter>
				<Counter title="Transactions" subtitle="Today" style={{ marginLeft: 12 }}>
					3
				</Counter>
			</View>

			<Surface style={DashboardStyles.graphSurface}>
				<Text style={DashboardStyles.graphTitle}>Transactions Last Year</Text>
				<Tabs routes={['Monthly', 'Daily']} style={DashboardStyles.graphTabs} />
				<LineGraph data={data} />
			</Surface>

			<Navbar style={DashboardStyles.navbar} routes={[<GraphSvg />, <CompassSvg />, <PersonSvg />]} />
		</View>
	);
};
