import { ImageComp } from 'components/ImageComp';
import { TimeLine } from 'components/TimeLine';
import React, { memo } from 'react';
import { Wrapper } from './Wrapper';
import profile_image from 'asset/profile.jpg';
import { activityItems, companyItems, educationItems } from './timeLineItems';

const ForMobile = memo(() => {
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
			<br />
			<div className='headline'>Strongly believe programming is "Creation" not "Manufacturing".</div>
			<br />
			<hr />
			<TimeLine title='Experience' items={companyItems} isMobile />
			<hr />
			<TimeLine title='Activity' items={activityItems} isMobile />
			<hr />
			<TimeLine title='Education' items={educationItems} isMobile />
		</Wrapper>
	);
});

ForMobile.displayName = 'ForMobile';
export default ForMobile;
