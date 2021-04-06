import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
}

export const Profile: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => (
	<Wrapper className={className}>
		<img
			alt='profile_photo'
			src='https://scontent-nrt1-1.xx.fbcdn.net/v/t31.18172-8/26171686_773776552814127_6087382745631739925_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=7WQz2Xl-2MYAX8pT05S&_nc_ht=scontent-nrt1-1.xx&oh=b7f898abd0f9dffb68acc49a83a294c6&oe=608E6D04'
		/>
	</Wrapper>
);
