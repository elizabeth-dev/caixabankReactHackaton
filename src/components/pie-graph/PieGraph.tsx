import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

const getPieChartData = (data: { value: number; color: string }[]) => {
	return data
		.filter(({ value }) => value > 0)
		.map(({ value, color }, i) => ({
			value,
			svg: {
				fill: color,
			},
			key: `pie-${i}`,
		}));
};

export interface IPieGraphProps {
	data: { value: number; color: string }[];
	style?: StyleProp<ViewStyle>;
}

export const PieGraph: React.FC<IPieGraphProps> = ({ data, style }) => {
	const pieChartData = getPieChartData(data);

	return <PieChart style={style} data={pieChartData} padAngle={0} innerRadius={0} />;
};
