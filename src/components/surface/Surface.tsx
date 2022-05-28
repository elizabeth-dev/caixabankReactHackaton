import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { SurfaceStyles } from './Surface.styles';

export interface ISurfaceProps {
	style?: StyleProp<ViewStyle>;
	children: React.ReactNode;
}
export const Surface: React.FC<ISurfaceProps> = ({ style, children }) => (
	<View style={[SurfaceStyles.root, style]}>{children}</View>
);
