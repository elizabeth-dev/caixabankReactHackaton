import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { Logo } from '../logo/Logo';
import { HeaderStyles } from './Header.styles';

export interface IHeaderProps {
	style?: StyleProp<ViewStyle>;
}

export const Header: React.FC<IHeaderProps> = ({ style }) => (
	<View style={style}>
		<Logo />
		<View style={HeaderStyles.textWrapper}>
			<Text style={HeaderStyles.title}>Transactions history</Text>
			<Text style={HeaderStyles.subtitle}>These are your monthly and daily actions. 📊</Text>
		</View>
	</View>
);
