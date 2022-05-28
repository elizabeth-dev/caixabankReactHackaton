import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const CompassSvg: React.FC<SvgProps> = (props) => (
	<Svg width={20} height={20} fill="none" {...props}>
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.853 11.254a1.5 1.5 0 0 1-.604.604L6.44 14.41c-.584.312-1.247-.33-.916-.915L8.075 8.68c.136-.253.35-.468.603-.604l4.811-2.554c.584-.331 1.246.332.915.917l-2.551 4.814ZM0 9.964c0 5.496 4.468 9.963 9.964 9.963s9.963-4.467 9.963-9.963C19.927 4.468 15.46 0 9.964 0 4.468 0 0 4.468 0 9.964Z"
			fill="#ffffff"
		/>
	</Svg>
);
