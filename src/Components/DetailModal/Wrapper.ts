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
	color: ${({ theme: { is_dark, dark, light } }) => (is_dark ? light : dark)} !important;
	border-radius: 16px;
	top: 8% !important;
	left: 29% !important;
	width: 40%;
	height: 60%;
`;

export const ModalBodayWrapper = styled.div`
	width: 97%;
	height: 100%;
	outline-style: none;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	padding: 1%;
	word-break: break-all;
	text-align: center;
	font-size: 1.2rem;

	.project {
		padding-bottom: 10%;
	}

	.block1 {
		padding-bottom: 10%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.block2 {
		padding-bottom: 10%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.description {
		padding-bottom: 10%;
	}
	.article {
		padding-bottom: 10%;
	}
`;
