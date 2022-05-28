import React from 'react';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import { NavbarStyles } from './Navbar.styles';

export interface INavbarProps {
	routes: React.ReactNode[];
	style?: StyleProp<ViewStyle>;
}
export const Navbar: React.FC<INavbarProps> = ({ routes, style }) => {
	const [active, setActive] = React.useState(0);

	return (
		<View style={[NavbarStyles.root, style]}>
			{routes.map((route, i) => (
				<Pressable
					key={i}
					style={[NavbarStyles.tab, active === i ? NavbarStyles.activeTab : NavbarStyles.inactiveTab]}
					onPress={() => setActive(i)}>
					{route}
				</Pressable>
			))}
		</View>
	);
};
