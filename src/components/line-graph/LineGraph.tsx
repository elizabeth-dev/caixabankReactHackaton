import { curveNatural } from 'd3-shape';
import React from 'react';
import { View } from 'react-native';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts';

const xAxisHeight = 30;
const axesSvg = { fontFamily: 'Montserrat400', fontSize: 12, fill: '#999999' };
const verticalContentInset = { top: 20, bottom: 20 };

export interface ILineGraphProps {
	data: { value: number; label: string }[];
}

export const LineGraph: React.FC<ILineGraphProps> = ({ data }) => {
	const values = data.map(({ value }) => value);
	return (
		<View style={{ height: 200, flexDirection: 'row', alignItems: 'stretch' }}>
			<YAxis
				data={values}
				style={{ marginBottom: xAxisHeight }}
				contentInset={verticalContentInset}
				svg={axesSvg}
				min={0}
			/>
			<View style={{ flex: 1, marginLeft: 10, alignItems: 'stretch' }}>
				<LineChart
					style={{ flex: 1, alignItems: 'stretch' }}
					data={values}
					svg={{ stroke: '#6979f8', strokeWidth: 2 }}
					curve={curveNatural}
					contentInset={verticalContentInset}
					gridMin={0}>
					<Grid svg={{ stroke: '#E4E4E433' }} />
				</LineChart>
				<XAxis
					style={{ marginHorizontal: -10, height: xAxisHeight }}
					data={data}
					formatLabel={(value, i) => data[i].label}
					contentInset={{ left: 10, right: 20 }}
					svg={axesSvg}
				/>
			</View>
		</View>
	);
};
