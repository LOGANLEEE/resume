import React from 'react';
import { Wrapper } from './Wrapper';
import { Chrono } from 'react-chrono';
import { TimelineItemModel } from 'react-chrono/dist/models/TimelineItemModel';

interface Props {
	title?: string;
	items?: TimelineItemModel[];
	isMobile?: boolean;
}
export const TimeLine = ({ title, items, isMobile = false }: Props) => {
	return (
		<Wrapper isMobile={isMobile}>
			<div className='title'>{title}</div>
			{items && (
				<Chrono
					items={items}
					mode='VERTICAL'
					scrollable={false}
					hideControls
					useReadMore={false}
					theme={{
						primary: 'white',
						secondary: 'red',
						cardBgColor: '#4e599d',
						cardForeColor: 'white',
						titleColor: '#0f52ba',
					}}
				/>
			)}
		</Wrapper>
	);
};
