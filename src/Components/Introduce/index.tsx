import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
}

export const Introduce: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => (
	<Wrapper className={className}>
		Front, Bigdata, Automation에 관심이 많은 개발자입니다.
		<br />
		평소 불편하거나 필요하다고 생각되는 기능들을 직접 개발하여 사용하고 있습니다.
		<br />
	</Wrapper>
);
