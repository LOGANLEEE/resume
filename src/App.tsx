import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useSpring } from 'react-spring';
import { StylesProvider } from '@material-ui/core/styles';

import { theme_info_state } from 'globalState';
import { Left } from 'Containers/Left';
import { Right } from 'Containers/Right';

import { Wrapper } from './Wrapper';

const App = () => {
	document.title = 'Get infomation of how to be teacher in korea!';
	const spring_info = useSpring({ opacity: 1, from: { opacity: 0 } });

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
				</Wrapper>
			</ThemeProvider>
		</StylesProvider>
	);
};

export default App;
