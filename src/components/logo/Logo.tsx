import React from 'react';
import { Text, View } from 'react-native';
import { NeoSvg } from '../../shared/svg/NeoSvg';
import { LogoStyles } from './Logo.styles';

export const Logo: React.FC = () => (
	<View style={LogoStyles.root}>
		<NeoSvg />
		<Text style={LogoStyles.text}>BANKS</Text>
	</View>
);
