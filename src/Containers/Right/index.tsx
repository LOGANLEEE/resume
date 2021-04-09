import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Wrapper } from './Wrapper';
import { Carrier } from 'Components/Carrier';
import { SkillList } from 'Components/SkillList';
import { Activity } from 'Components/Activity';
import { Divider } from '@material-ui/core';

interface Props {}

export const Right: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => {
	return (
		<Wrapper className={className}>
			<div className='block1'>
				<Carrier />
			</div>
			<Divider />
			<SkillList />
			<Divider />
			<Activity />
			<Divider />
		</Wrapper>
	);
};
