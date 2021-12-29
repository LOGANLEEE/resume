import styled from 'styled-components';

interface Props {
	className?: string;
}
export const Wrapper = styled.div<Props>`
	.intro {
		display: flex;
		flex-direction: row;

		.info {
			flex-direction: column;
			width: 50%;
			color: white;
			text-align: center;
			line-height: 30px;
			.name {
				text-align: center;
			}
			.desc {
				text-align: center;
			}
		}
	}
	.headline {
		padding-top: 10px;
		color: white;
		display: flex;
		flex-direction: column;
		font-size: 11px;
	}
`;
