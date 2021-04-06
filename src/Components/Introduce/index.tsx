import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
}

export const Introduce: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => (
	<Wrapper className={className}>
		프론트엔드, 빅데이터에 관심이 많은 개발자입니다.
		<br />
		프론트엔드, 빅데이터에 관심이 많은 개발자입니다.
		<br />
		프론트엔드, 빅데이터에 관심이 많은 개발자입니다.
		<br />
		프론트엔드, 빅데이터에 관심이 많은 개발자입니다.
	</Wrapper>
);
