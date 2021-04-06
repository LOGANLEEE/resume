import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	border-radius: 16px;
	background-color: #1b2938;
	padding: 1%;

	.block1 {
		flex-direction: row;
		display: flex;
		flex-wrap: wrap;

		.title {
			width: 50%;
			justify-content: flex-start;
		}

		.btn {
			cursor: pointer;
			width: 50%;
			justify-content: flex-end;
			text-align: end;
		}
	}

	.list {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 10px;
		.odd {
			background-color: #2d3c4a;
		}
		.even {
			background-color: #264767;
		}
	}
`;

export const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	cursor: pointer;
	gap: 10px;
	border-radius: 16px;
	padding: 1%;

	&:hover {
		text-decoration: underline;
	}

	.block1 {
	}

	.block2 {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;
