import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Wrapper } from './Wrapper';
import { Carrier } from 'Components/Carrier';

interface Props {}

export const Right: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => (
	<Wrapper className={className}>
		<div className='block1'>
			<Carrier />
		</div>
		<div>NONE</div>
	</Wrapper>
);
