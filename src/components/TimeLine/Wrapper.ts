import styled from 'styled-components';

interface Props {
	className?: string;
	isMobile: boolean;
}
export const Wrapper = styled.div<Props>`
	display: flex;
	flex-direction: column;
	width: 100%;

	font-size: ${({ isMobile }) => (isMobile ? '12px' : null)};

	.title {
		display: flex;
		justify-content: flex-start;
		margin-left: 20px;
		font-size: 20px;
		color: white;
	}

	a {
		font-size: 14px;
		color: white;
		cursor: pointer;
	}

	div:nth-child(1) {
		padding-left: 0;
		padding-right: 0;
		padding-top: 2px;
	}

	.timeline-item-title {
		font-size: 14px;
		color: white;
		&.active {
			color: white !important;
			background-color: #323964 !important;
		}
	}

	.timeline-card-content {
		min-height: auto;
	}

	.show-more {
		color: white;
	}
`;
