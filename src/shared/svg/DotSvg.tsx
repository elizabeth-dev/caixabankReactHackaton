import React from 'react';
import Svg, { Circle, SvgProps } from 'react-native-svg';

export const DotSvg: React.FC<SvgProps> = (props) => (
	<Svg width={8} height={8} {...props}>
		<Circle cx={4} cy={4} r={4} fill="currentColor" />
	</Svg>
);
