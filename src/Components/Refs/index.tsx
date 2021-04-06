import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Wrapper } from './Wrapper';
import { GitHub, LinkedIn, Facebook } from '@material-ui/icons/';

interface Props {}

export const Refs: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => (
	<Wrapper className={className}>
		<GitHub
			fontSize='large'
			className='icon'
			onClick={() => {
				window.location.href = 'https://github.com/LOGANLEEE';
			}}
		/>
		<LinkedIn
			fontSize='large'
			className='icon'
			onClick={() => {
				window.location.href = 'https://www.linkedin.com/in/logan-lee-798344166/';
			}}
		/>
		<Facebook
			fontSize='large'
			className='icon'
			onClick={() => {
				window.location.href = 'https://www.facebook.com/profile.php?id=100005453672829';
			}}
		/>
	</Wrapper>
);
