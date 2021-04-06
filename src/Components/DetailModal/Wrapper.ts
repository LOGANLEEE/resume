import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import { animated } from 'react-spring';

export const Wrapper = styled(animated.div)`
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
`;
export const StyledModal = styled(Modal)`
	border: 1px solid silver;
	background-color: #132433;
	border-radius: 16px;
	top: 8% !important;
	left: 29% !important;
	width: 40%;
	height: 80%;
`;

export const ModalBodayWrapper = styled.div`
	width: 97%;
	height: 100%;
	outline-style: none;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 10%;
	padding: 1%;
    word-break: break-all;
	text-align: center;

	.block1 {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.block2 {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;