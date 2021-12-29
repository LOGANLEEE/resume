import { Button } from 'components/Button';
import { ImageComp } from 'components/ImageComp';
import { TimeLine } from 'components/TimeLine';
import React, { memo, useCallback, useContext, useState } from 'react';
import { Wrapper } from './Wrapper';

export const ForMobile = memo(() => {
	return (
		<Wrapper>
			<div className='intro'>
				<ImageComp
					radius={15}
					width={'50%'}
					height={'30%'}
					// width={200}
					// height={300}
				/>
				<div className='info'>
					{/* <span className='name'>LOGAN LEE</span>
					<span className='desc'>Full Stack Developer</span> */}
					LOGAN LEE 🇰🇷
					<br />
					Fullstack Developer(4y)
					<br />
					<br />
				</div>
			</div>
			<div className='headline'>Strongly believe programming is "Creation" not "Manufacturing".</div>
			<TimeLine />
		</Wrapper>
	);
});

ForMobile.displayName = 'ForMobile';
