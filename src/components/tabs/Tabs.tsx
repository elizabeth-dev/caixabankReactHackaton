import React from 'react';
import { Pressable, StyleProp, Text, View, ViewStyle } from 'react-native';
import { TabsStyles } from './Tabs.styles';

export interface ITabsProps {
	routes: string[];
	style?: StyleProp<ViewStyle>;
}

export const Tabs: React.FC<ITabsProps> = ({ routes, style }) => {
	const [active, setActive] = React.useState(0);
	return (
		<View style={[TabsStyles.root, style]}>
			{routes.map((route, i) => (
				<Pressable
					key={i}
					style={[TabsStyles.tab, active === i ? TabsStyles.activeTab : TabsStyles.inactiveTab]}
					onPress={() => setActive(i)}>
					<Text style={TabsStyles.tabText}>{route}</Text>
				</Pressable>
			))}
		</View>
	);
};
