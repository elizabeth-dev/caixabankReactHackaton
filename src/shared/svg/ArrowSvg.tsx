import Svg, { Path, SvgProps } from 'react-native-svg';

export const ArrowSvg: React.FC<SvgProps> = (props) => (
	<Svg width={6} height={8} fill="none" {...props}>
		<Path
			d="M3 6.667V1.333M1 3.333l2-2 2 2"
			stroke="#4AAF05"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);
