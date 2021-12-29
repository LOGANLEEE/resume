import styled from 'styled-components';

interface Props {
	className?: string;
}
export const Wrapper = styled.div<Props>`
	display: flex;
	width: 100%;

	a {
		font-size: 14px;
		color: white;
		cursor: pointer;
	}

	div:nth-child(1) {
		padding: 0;
	}

	.timeline-item-title {
		font-size: 14px;
		color: white;
		&.active {
			color: white !important;
			background-color: #323964 !important;
		}
	}

	.show-more {
		color: white;
	}
`;
