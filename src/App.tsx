import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useSpring } from 'react-spring';
import { StylesProvider } from '@material-ui/core/styles';

import { alert_state, theme_info_state } from 'globalState';
import { Left } from 'Containers/Left';
import { Right } from 'Containers/Right';
import { AlertMessage } from 'Components/AlertMessage';

import { Wrapper } from './Wrapper';
import { isChrome } from 'react-device-detect';

const App = () => {
	document.title = 'Get infomation of how to be teacher in korea!';
	const spring_info = useSpring({ opacity: 1, from: { opacity: 0 } });
	const [{ visible }, set_alert] = useRecoilState(alert_state);
	const date = new Date();
	useEffect(() => {
		if (!isChrome) {
			set_alert({
				message: `크롬 브라우저에 최적화되어 있으며 현재 계속 중입니다. (${date.getMonth()+1}/${date.getDate()} 기준)`,
				severity: 'info',
				visible: true,
			});
		} else {
			set_alert({
				message: `현 사이트는 계속 업데이트 중입니다. (${date.getMonth()+1}/${date.getDate()} 기준)`,
				severity: 'info',
				visible: true,
			});
		}
	}, []);

	return (
		<StylesProvider injectFirst>
			<ThemeProvider theme={useRecoilValue(theme_info_state)}>
				<Wrapper style={spring_info}>
					<div className='left'>
						<Left />
					</div>
					<div className='right'>
						<Right />
					</div>
					{visible && <AlertMessage />}
				</Wrapper>
			</ThemeProvider>
		</StylesProvider>
	);
};

export default App;
