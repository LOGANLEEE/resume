import React, { FunctionComponent, HTMLAttributes, useEffect, useState } from 'react';
import { Wrapper } from './Wrapper';
import IMG_9379 from 'asset/IMG_9379.jpg';
import IMG_7605 from 'asset/IMG_7605.jpg';
interface Props {
	className?: string;
}

interface Slides {
	id: number;
	url: any;
}

export const Profile: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => {
	// const slides: Slides[] = [
	// 	{ id: 1, url: IMG_9379 },
	// 	{
	// 		id: 2,
	// 		url:
	// 			'https://scontent-nrt1-1.xx.fbcdn.net/v/t31.18172-8/26171686_773776552814127_6087382745631739925_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=7WQz2Xl-2MYAX8pT05S&_nc_ht=scontent-nrt1-1.xx&oh=b7f898abd0f9dffb68acc49a83a294c6&oe=608E6D04',
	// 	},
	// 	{ id: 3, url: IMG_7605 },
	// ];
	// const [index, setIndex] = useState(1);
	// useEffect(() => void setInterval(() => setIndex((state) => (state + 1) % 3), 1000), []);

	return (
		<Wrapper className={className}>
			<img alt='profile_photo' src={IMG_9379} />
		</Wrapper>
	);
};
