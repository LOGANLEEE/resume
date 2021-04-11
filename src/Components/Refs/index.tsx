import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Wrapper } from './Wrapper';
import { GitHub, LinkedIn, Facebook, Work, AlarmOn } from '@material-ui/icons';

interface Props {}

export const Refs: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => (
	<Wrapper className={className}>
		<div className='block1'>
			<GitHub
				fontSize='large'
				className='icon'
				onClick={() => window.open('https://github.com/LOGANLEEE', '_blank')}
			/>
			<LinkedIn
				fontSize='large'
				className='icon'
				onClick={() => window.open('https://www.linkedin.com/in/logan-lee-798344166/', '_blank')}
			/>
			<Facebook
				fontSize='large'
				className='icon'
				onClick={() => window.open('https://www.facebook.com/profile.php?id=100005453672829', '_blank')}
			/>
		</div>
		<div className='block2'>
			<div className='title'>- Portfolios</div>
			<div className='list' onClick={() => window.open('http://stastica.net', '_blank')}>
				<Work fontSize='large' className='icon' />
				stastica.net
			</div>
			<div
				className='list'
				onClick={() => window.open('https://github.com/LOGANLEEE/front_like_to_be_teacher', '_blank')}>
				<AlarmOn fontSize='large' className='icon' />
				liketobeteacher.com (예정)
			</div>
		</div>
	</Wrapper>
);
