import React from 'react';
import { Wrapper } from './Wrapper';
import { Chrono } from 'react-chrono';
import { TimelineItemModel } from 'react-chrono/dist/models/TimelineItemModel';

export const TimeLine = () => {
	const items: TimelineItemModel[] = [
		{
			title: '06.2018',
			url: 'http://www.kb-sys.co.kr/en/index',
			cardTitle: `KBSYS`,
			cardSubtitle: '$6 million in annual sales',
			cardDetailedText: [`KBSYS`],
		},
		{
			title: ' ',
			url: 'https://eng.sk.com',
			cardTitle: `SK C&C`,
			cardSubtitle: '$1.8 billion in annual sales',
			cardDetailedText: [`Participated in SK C&C's Digital Workplace platform project`],
		},
		{
			title: ' ',
			url: 'https://eng.sk.com',
			cardTitle: `SK C&C`,
			cardSubtitle: '$1.8 billion in annual sales',
			cardDetailedText: [`Participated in SK C&C's ChatBot platform project`],
		},
		{
			title: ' ',
			url: 'https://www.magnachip.com',
			cardTitle: 'MagnaChip (semiconductor manufacturing)',
			cardSubtitle: '$567 million in annual sales',
			cardDetailedText: [`Participation in legacy system migration and new implementation project`],
		},
		{
			title: ' ',
			url: 'https://en.wikipedia.org/wiki/Woori_Bank',
			cardTitle: 'Woori Bank',
			cardSubtitle: '$26 billin in annual sales',
			cardDetailedText: `Participated in "AI Hub" project`,
		},
		{
			title: '04.2021',
			url: 'http://www.kb-sys.co.kr/en/index',
			cardTitle: 'BTG Crop (Seoul) ',
			cardSubtitle: '$19 million in annual sales',
			cardDetailedText: '',
		},
	];

	return (
		<Wrapper>
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
		</Wrapper>
	);
};
