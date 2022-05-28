import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { Surface } from '../surface/Surface';
import { CounterStyles } from './Counter.styles';

export interface ICounterProps {
	title: string;
	subtitle: string;
	children: string;
	style?: StyleProp<ViewStyle>;
}

export const Counter: React.FC<ICounterProps> = ({ title, subtitle, children, style }) => (
	<Surface style={style}>
		<Text style={CounterStyles.title}>{title}</Text>
		<Text style={CounterStyles.value}>{children}</Text>
		<Text style={CounterStyles.subtitle}>{subtitle}</Text>
	</Surface>
);
