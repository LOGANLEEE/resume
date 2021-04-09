import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: space-evenly;

	.block1 {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.block2 {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.icon {
		cursor: pointer;

		&:hover {
			color: white;
		}
	}
`;
