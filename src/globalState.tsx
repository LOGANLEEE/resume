import { atom } from 'recoil';
import { Data } from 'asset/listData';

export const theme_info_state = atom({
	key: 'theme_info_state',
	default: { is_dark: true, dark: '#0e161f', light: '#c3bcc3' },
});

export const detail_info_state = atom<Data>({
	key: 'detail_info_state',
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
export const alert_state = atom({
	key: 'test',
	default: {
		message: '',
		severity: 'error',
		visible: false,
	},
});
