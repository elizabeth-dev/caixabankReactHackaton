import { curveNatural } from 'd3-shape';
import React from 'react';
import { View } from 'react-native';
import { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import { AreaChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';

const AreaGradient = () => (
	<Defs>
		<LinearGradient id={'areaGradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
			<Stop offset={'50%'} stopColor={'#2d14c4'} stopOpacity={1} />
			<Stop offset={'100%'} stopColor={'#ffffff'} stopOpacity={0.5} />
		</LinearGradient>
	</Defs>
);

const LineGradient = () => (
	<Defs>
		<LinearGradient id={'lineGradient'} x1={'0%'} y1={'0%'} x2={'100%'} y2={'0%'}>
			<Stop offset={'65.57%'} stopColor={'#260CBC'} stopOpacity={1} />
			<Stop offset={'161.03%'} stopColor={'#6756FF'} stopOpacity={1} />
		</LinearGradient>
	</Defs>
);

const Line = ({ line }: any) => {
	return <Path key={'line'} d={line} fill={'transparent'} stroke={'url(#lineGradient)'} />;
};

const xAxisHeight = 30;
const axesSvg = { fontFamily: 'Montserrat400', fontSize: 12, fill: '#9c9c9c' };
const verticalContentInset = { top: 0, bottom: 5 };

export interface IAreaGraphProps {
	data: { value: number; label: string }[];
}

export const AreaGraph: React.FC<IAreaGraphProps> = ({ data }) => {
	const values = data.map(({ value }) => value);
	return (
		<View style={{ flexDirection: 'row', alignItems: 'stretch', width: '100%' }}>
			<YAxis
				data={values}
				style={{ marginBottom: xAxisHeight * 2 }}
				contentInset={verticalContentInset}
				svg={axesSvg}
				min={0}
			/>
			<View style={{ flex: 1, marginLeft: 10, alignItems: 'stretch' }}>
				<AreaChart
					data={values}
					style={{ aspectRatio: 2.4 }}
					svg={{ fill: 'url(#areaGradient)' }}
					curve={curveNatural}
					contentInset={{ top: 30, bottom: 30 }}>
					<Line />
					<Grid direction={Grid.Direction.VERTICAL} svg={{ stroke: '#e5e5e5' }} />
					<AreaGradient />
					<LineGradient />
				</AreaChart>
				<XAxis
					style={{ height: xAxisHeight }}
					data={data}
					formatLabel={(value, i) => data[i].label}
					contentInset={{ left: 15, right: 10 }}
					svg={axesSvg}
				/>
			</View>
		</View>
	);
};
