import styled from 'styled-components';

interface Props {
	className?: string;
}
export const Wrapper = styled.div<Props>`
	.intro {
		display: flex;
		flex-direction: row;

		.info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 50%;
			color: white;
			text-align: center;
			line-height: 30px;

			a {
				color: white;
				text-decoration: none;
			}
		}
	}
	.headline {
		padding-top: 10px;
		color: white;
		display: flex;
		flex-direction: column;
	}
`;
