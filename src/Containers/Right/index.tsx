import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Wrapper } from './Wrapper';
import { Carrier } from 'Components/Carrier';

interface Props {}

export const Right: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => (
	<Wrapper className={className}>
		<div className='block1'>
			<Carrier />
		</div>
		<div>사용기술</div>
		<div>활동내역</div>
		<div>학력</div>
	</Wrapper>
);
