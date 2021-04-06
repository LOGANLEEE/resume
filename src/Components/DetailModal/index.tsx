import { useSpring } from 'react-spring';
import React, { FunctionComponent, HTMLAttributes } from 'react';

import { StyledModal, Wrapper, ModalBodayWrapper } from './Wrapper';
import { detail_info_state } from 'globalState';
import { useResetRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';

interface Props {
	should_open: boolean;
	set_should_open: Function;
}

export const DetailModal: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({
	set_should_open,
	should_open,
	className,
}) => {
	const spring_info = useSpring({
		opacity: 1,
		to: { opacity: should_open ? 1 : 0 },
	});
	const { architecture, description, location, period, project, role, article } = useRecoilValue(detail_info_state);
	const reset_detail_info = useResetRecoilState(detail_info_state);
	return (
		<Wrapper style={spring_info} className={className}>
			<StyledModal
				open={should_open}
				onClose={() => {
					set_should_open(false);
					reset_detail_info();
				}}>
				<ModalBodayWrapper>
					<div className='project'>{project}</div>
					<div className='block1'>
						<div>{location}</div>
						<div>{period}</div>
					</div>
					<div className='block2'>
						<div> {role}</div>
						<div> {architecture}</div>
					</div>
					<div className='description'> {description}</div>
					{article && (
						<div className='aritcle'>
							<a href={article} target='_blank' rel='noreferrer'>
								참조기사
							</a>
						</div>
					)}
				</ModalBodayWrapper>
			</StyledModal>
		</Wrapper>
	);
};
