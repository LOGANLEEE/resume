import styled from 'styled-components';

export const Wrapper = styled.div<{ open: boolean }>`
	max-width: 100%;
	border-radius: 16px;
	background-color: #1b2938;
	padding: 1%;
	cursor: pointer;

	.block1 {
		flex-direction: row;
		display: flex;
		flex-wrap: wrap;
		padding-bottom: ${({ open }) => (open ? 1 : 0)}%;
		
		.title {
			width: 80%;
			font-size: 1.8rem;
			justify-content: flex-start;
		}

		.btn {
			width: 20%;
			justify-content: flex-end;
			text-align: end;
		}
	}

	.list {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 10px;
		font-size: 1.3rem;

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

	.list-block1 {
	}

	.list-block2 {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;
