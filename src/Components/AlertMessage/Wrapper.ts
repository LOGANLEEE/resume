import styled from 'styled-components';
import Alert from '@material-ui/lab/Alert';
import { animated } from 'react-spring';

export const Wrapper = styled(animated.div)``;

export const StyledAlert = styled(Alert)`
	position: fixed;
	top: 20%;
	font-size: 1.5rem;
	width: 80%;
	left: 10%;
	z-index: 1301;
	justify-content: center;
`;
