import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	.block1 {
		display: flex;
		width: 100%;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		padding-bottom: 10%;
	}

	.block2 {
		.title {
			padding: 5%;
		}
		width: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: space-evenly;

		.list {
			padding: 5%;
			cursor: pointer;
			&:hover {
				text-decoration: underline;
			}
		}
	}

	.icon {
		cursor: pointer;

		&:hover {
			color: white;
		}
	}
`;
