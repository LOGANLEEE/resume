import React, { FunctionComponent, useEffect } from 'react';
import { Color } from '@material-ui/lab/Alert';
import { alert_state } from 'globalState';
import { useResetRecoilState, useRecoilValue } from 'recoil';
import { StyledAlert, Wrapper } from './Wrapper';
import { useSpring } from 'react-spring';

interface Props {}

export const AlertMessage: FunctionComponent<Props> = () => {
	const { message, severity } = useRecoilValue(alert_state);
	const reset_alert_state = useResetRecoilState(alert_state);

	const spring_info = useSpring({
		opacity: 1,
		from: { opacity: 0 },
	});

	useEffect(() => {
		setTimeout(() => reset_alert_state(), 1500);
	}, [message, severity]);

	return (
		<Wrapper style={spring_info}>
			<StyledAlert className='alert' severity={severity as Color}>
				{message}
			</StyledAlert>
		</Wrapper>
	);
};
