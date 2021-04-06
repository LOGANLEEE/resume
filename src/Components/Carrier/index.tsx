import React, { FunctionComponent, HTMLAttributes, useState } from 'react';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { data, Data } from 'asset/listData';

import { Wrapper, ListWrapper } from './Wrapper';
import { DetailModal } from 'Components/DetailModal';
import { detail_info_state } from 'globalState';
import { useSetRecoilState } from 'recoil';

interface Props {}

export const Carrier: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => {
	const [open, setOpen] = useState(true);
	const [should_open, set_should_open] = useState(false);

	const set_detail_info = useSetRecoilState(detail_info_state);

	return (
		<Wrapper className={className}>
			<div className='block1'>
				<div className='title'>경력사항 {data.length}건의 프로젝트 (2018.06.18 ~ 2020.12.23)</div>
				<div className='btn' onClick={() => setOpen(!open)}>
					{open ? <ExpandLess /> : <ExpandMore />}
				</div>
			</div>
			{open && (
				<div className='list'>
					{data.map((data, idx) => (
						<List
							key={data?.project + data?.period}
							className={idx % 2 === 0 ? `odd` : `even`}
							data={data}
							onClick={() => {
								set_detail_info(data);
								set_should_open(true);
							}}
						/>
					))}
				</div>
			)}
			{should_open && (
				<DetailModal should_open={should_open} set_should_open={set_should_open}>
					<div>Modal</div>
				</DetailModal>
			)}
		</Wrapper>
	);
};

const List: FunctionComponent<{ data: Data } & HTMLAttributes<HTMLDivElement>> = ({
	onClick,
	className,
	data: { period, project, role },
}) => (
	<ListWrapper onClick={onClick} className={className} key={period + project}>
		<div className='block1'>
			<div>{project}</div>
		</div>
		<div className='block2'>
			<div> {role}</div>
			<div> {period}</div>
		</div>
	</ListWrapper>
);
