import { Platform, StyleSheet } from 'react-native';

export const SurfaceStyles = StyleSheet.create({
	root: {
		borderRadius: 10,
		backgroundColor: '#ffffff',
		paddingHorizontal: 24,
		paddingVertical: 14,
		alignItems: 'center',
		//drop-shadow(0px 16px 16px rgba(50, 50, 71, 0.08)) drop-shadow(0px 24px 32px rgba(50, 50, 71, 0.08))
		...(Platform.OS === 'web'
			? { borderWidth: 1, borderColor: '#e5e5e5', borderStyle: 'solid' }
			: {
					shadowColor: '#32324714',
					shadowOffset: {
						width: 0,
						height: 24,
					},
					shadowRadius: 32,
			  }),
	},
});
