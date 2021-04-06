import { atom } from 'recoil';
import { Data } from 'asset/listData';

export const theme_info_state = atom({
	key: 'theme_info_state',
	default: { is_dark: true, dark_back_ground: '#0e161f', white_back_ground: '#6b636a' },
});

export const detail_info_state = atom<Data>({
	key: 'theme_info_state',
	default: {
		period: ``,
		project: ``,
		role: ``,
		architecture: ``,
		description: ``,
		location: ``,
		article: undefined,
	},
});
