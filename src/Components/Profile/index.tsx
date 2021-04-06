import React, { FunctionComponent, HTMLAttributes, useEffect, useState } from 'react';
import { Wrapper } from './Wrapper';
import IMG_9379 from 'asset/IMG_9379.jpg';
import IMG_0614 from 'asset/IMG_0614.jpg';
import IMG_7653 from 'asset/IMG_7653.jpg';
import IMG_7605 from 'asset/IMG_7605.jpg';
import { config, useTransition, animated } from 'react-spring';
interface Props {
	className?: string;
}

interface Slides {
	id: number;
	url: any;
}

export const Profile: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => {
	const slides = [
		{ id: 1, url: IMG_9379 },
		{
			id: 2,
			url:
				'https://scontent-nrt1-1.xx.fbcdn.net/v/t31.18172-8/26171686_773776552814127_6087382745631739925_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=7WQz2Xl-2MYAX8pT05S&_nc_ht=scontent-nrt1-1.xx&oh=b7f898abd0f9dffb68acc49a83a294c6&oe=608E6D04',
		},
		{ id: 3, url: IMG_0614 },
		{ id: 4, url: IMG_7653 },
		{ id: 5, url: IMG_7605 },
	];

	const [index, set] = useState(0);

	const transitions = useTransition(slides[index], (item: Slides) => item.id, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: config.molasses,
	});
	console.log(transitions);

	useEffect(() => void setInterval(() => set((state) => (state + 1) % 4), 2000), []);

	return (
		<Wrapper className={className}>
			{transitions.map(({ item, props, key }) => (
				<animated.div key={key} class='bg' style={{ ...props, backgroundImage: `url(${item.url}` }} />
			))}
		</Wrapper>
	);
};
