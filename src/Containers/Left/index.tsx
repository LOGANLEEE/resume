import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Wrapper } from './Wrapper';
import { Profile } from 'Components/Profile';
import { Introduce } from 'Components/Introduce';
import { Refs } from 'Components/Refs';

interface Props {}

export const Left: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => (
	<Wrapper className={className}>
		<Profile />
		<Introduce />
		<Refs />
	</Wrapper>
);
