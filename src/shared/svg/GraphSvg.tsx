import React from 'react';
import Svg, { Rect, SvgProps } from 'react-native-svg';

export const GraphSvg: React.FC<SvgProps> = (props) => (
	<Svg width={18} height={19} fill="none" {...props}>
		<Rect width={4} height={19} rx={2} fill="#fff" />
		<Rect x={7} y={4} width={4} height={15} rx={2} fill="#fff" />
		<Rect x={14} y={11} width={4} height={8} rx={2} fill="#fff" />
	</Svg>
);
