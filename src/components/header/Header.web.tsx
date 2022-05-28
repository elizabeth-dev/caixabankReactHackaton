import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { Logo } from '../logo/Logo';
import { HeaderStyles } from './Header.styles.web';

export interface IHeaderProps {
	style?: StyleProp<ViewStyle>;
}

export const Header: React.FC<IHeaderProps> = ({ style }) => (
	<View style={style}>
		<View style={HeaderStyles.topbar}>
			<Logo />
		</View>
		<View style={HeaderStyles.subTopbar}>
			<Text style={HeaderStyles.subtitle}>Dashboard</Text>
		</View>
	</View>
);
