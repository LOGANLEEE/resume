import styled from 'styled-components';
import { animated } from 'react-spring';

export const Wrapper = styled(animated.div)`
	min-height: 100vh !important;
	max-width: 100vw !important;
	overflow-y: scroll;

	background-color: ${({ theme: { is_dark, dark, light } }) => (is_dark ? dark : light)} !important;
	color: ${({ theme: { is_dark, dark, light } }) => (is_dark ? light : dark)} !important;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	padding: 0.5%;

	.left {
		width: 20%;
	}

	.right {
		width: 80%;
	}
`;
