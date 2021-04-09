import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Button } from '@material-ui/core';
import { Wrapper } from './Wrapper';

interface Props {}

interface Data {
	link?: string;
	description: string;
}

const data: Data[] = [
	{
		link: 'https://angelhackseoul.kr',
		description: `2020년 엔젤핵 해커톤 엠베서더로 활동. 개발팀 팀장을 맡아 진행하였습니다.`,
	},

	{
		link: 'https://www.yna.co.kr/view/AKR20190418119500848',
		description: `19년도 회사 주체 컨퍼런스, VIP 의전,통역 및 기술영업`,
	},
	{
		link:
			'https://m.etnews.com/20181029000396?obj=Tzo4OiJzdGRDbGFzcyI6Mjp7czo3OiJyZWZlcmVyIjtOO3M6NzoiZm9yd2FyZCI7czoxMzoid2ViIHRvIG1vYmlsZSI7fQ%3D%3D',
		description: `18년도 회사 주체 컨퍼런스, VIP 의전,통역 및 기술영업`,
	},
	{
		description: `GDG 인천 기술 컨퍼런스에서 발표`,
	},
	{
		link:
			'https://www.google.com/search?q=tibco+now+2018&newwindow=1&client=safari&hl=en&tbm=isch&sxsrf=ALeKk004rD86Xrndd2zWET04iyui5p96nQ:1617954174920&source=lnms&sa=X&ved=0ahUKEwjTk-_-1PDvAhXCft4KHZ1aAwcQ_AUIECgC&biw=1024&bih=1175&dpr=2',
		description: `TIBCO사에서 주최한 TIBCO NOW 2018 참석 및 통역(LA)`,
	},
	{
		link:
			'https://www.google.com/search?q=mesos+conf+2018&newwindow=1&client=safari&rls=en&sxsrf=ALeKk039s6-fIUZtMiMUDO-reNHTbmXJRA:1617954292536&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjf4vm21fDvAhWEBIgKHfhrCzsQ_AUoAnoECAIQBA&biw=1024&bih=1175',
		description: `Mesosphere사에서 주최한 MesosCon 2018 참석 및 통역(SF)`,
	},
	{
		description: `배민, 당근마켓 ,AWS, Nginx 등 다수의 기술 컨퍼런스 참석`,
	},
];

export const Activity: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => (
	<Wrapper className={className}>
		Activities
		{data.map(({ description, link }) => (
			<div
				key={description}
				className='list'
				onClick={() => {
					link && window.open(link, '_blank');
				}}>
				- {description}
				{link && (
					<Button className='btn' color='primary'>
						링크
					</Button>
				)}
			</div>
		))}
	</Wrapper>
);
