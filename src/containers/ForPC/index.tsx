import profile_image from 'asset/profile.jpg';
import { ImageComp } from 'components/ImageComp';
import { TimeLine } from 'components/TimeLine';
import { activityItems, companyItems, educationItems } from 'containers/ForMobile/timeLineItems';
import React from 'react';
import { Wrapper } from './Wrapper';

export const ForPC = () => {
	return (
		<Wrapper>
			<div className='intro'>
				<ImageComp
					imagePath={profile_image}
					radius={15}
					width={'50%'}
					height={'30%'}
					// width={200}
					// height={300}
				/>
				<div className='info'>
					<span>LOGAN LEE 🇰🇷</span>
					<span>Fullstack Developer(4y)</span>
					<a href='mailto:logan_lee@kakao.com'>logan_lee@kakao.com</a>
					<span>Github, LinkedIn</span>
				</div>
			</div>
			<div className='headline'>Strongly believe programming is "Creation" not "Manufacturing".</div>
			<hr />
			<TimeLine title='Experience' items={companyItems} />
			<hr />
			<TimeLine title='Activity' items={activityItems} />
			<hr />
			<TimeLine title='Education' items={educationItems} />
		</Wrapper>
	);
};
