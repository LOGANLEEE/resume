import React from 'react';
import { Wrapper } from './Wrapper';
import { Chrono } from 'react-chrono';

export const TimeLine = () => {
	const items = [
		{
			title: 'May 1940',
			cardTitle: 'Dunkirk',
			url: 'http://www.history.com',
			cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
			cardDetailedText: 'Men of the British Expeditionary Force (BEF) wade out to..',
			// media: {
			// 	type: 'IMAGE',
			// 	source: {
			// 		url: 'http://someurl/image.jpg',
			// 	},
			// },
		},
		{
			title: 'May 1940',
			cardTitle: 'Dunkirk',
			url: 'http://www.history.com',
			cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
			cardDetailedText: 'Men of the British Expeditionary Force (BEF) wade out to..',
			// media: {
			// 	type: 'IMAGE',
			// 	source: {
			// 		url: 'http://someurl/image.jpg',
			// 	},
			// },
		},
		{
			title: 'May 1940',
			cardTitle: 'Dunkirk',
			url: 'http://www.history.com',
			cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
			cardDetailedText: 'Men of the British Expeditionary Force (BEF) wade out to..',
			// media: {
			// 	type: 'IMAGE',
			// 	source: {
			// 		url: 'http://someurl/image.jpg',
			// 	},
			// },
		},
		{
			title: 'May 1940',
			cardTitle: 'Dunkirk',
			url: 'http://www.history.com',
			cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
			cardDetailedText: 'Men of the British Expeditionary Force (BEF) wade out to..',
			// media: {
			// 	type: 'IMAGE',
			// 	source: {
			// 		url: 'http://someurl/image.jpg',
			// 	},
			// },
		},
		{
			title: 'May 1940',
			cardTitle: 'Dunkirk',
			url: 'http://www.history.com',
			cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
			cardDetailedText: 'Men of the British Expeditionary Force (BEF) wade out to..',
			// media: {
			// 	type: 'IMAGE',
			// 	source: {
			// 		url: 'http://someurl/image.jpg',
			// 	},
			// },
		},
	];
	return (
		<Wrapper>
			<div style={{ width: '500px', height: '950px' }}>
				<Chrono items={items} mode='VERTICAL_ALTERNATING' />
			</div>
		</Wrapper>
	);
};
