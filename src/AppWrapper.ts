import styled from 'styled-components';
export const AppWrapper = styled.div`
	padding: 5px;
	background-color: #333964;

	.init-enter {
		opacity: 0;
		transform: scale(0.9);
	}
	.init-enter-active {
		opacity: 1;
		transform: translateX(0);
		transition: opacity 300ms, transform 300ms;
	}
	.init-exit {
		opacity: 1;
	}
	.init-exit-active {
		opacity: 0;
		transform: scale(0.9);
		transition: opacity 300ms, transform 300ms;
	}
`;
