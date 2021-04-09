import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Wrapper } from './Wrapper';

interface Props {}
export const skillList = [
	{ icon: '🖥', key: 'Front', val: 'React, Redux, Recoil' },
	{ icon: '🧪', key: 'Testing Tool', val: 'Storybook, Jest, J-Unit' },
	{ icon: '💅🏼', key: 'CSS', val: 'Styled-Components, Material-UI' },
	{ icon: '💻', key: 'Backend', val: 'NodeJs, ExpressJs, Spring-Boot, Vert.X' },
	{ icon: '📏', key: 'Lint', val: 'Eslint, Prettier' },
	{ icon: '💽', key: 'ORM', val: 'JPA, Prisma' },
	{ icon: '👨🏼‍🔧', key: 'DevOps', val: 'Docker, Jenkins, K8s, Docker-swram' },
	{ icon: '👨🏻‍💻', key: 'OS', val: 'OS X, Linux' },
	{ icon: '🇬🇧', key: 'Language', val: 'Java, Javascript, Typescript' },
	{ icon: '🏦', key: 'DB', val: 'Maria, Postgres, Redis' },
	{ icon: '☁️', key: 'Cloud', val: 'GCP, AWS, ORACLE, DC/OS' },
	{ icon: '📊', key: 'BigData', val: 'Haddop, Spark, Kafka, Hive, Zoo Keeper' },
];
export const SkillList: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => (
	<Wrapper className={className}>
		Skill
		{skillList.map(({ key, val, icon }) => (
			<div className='list'>
				<div key={icon}>
					{icon} {key}: {val}
				</div>
			</div>
		))}
	</Wrapper>
);
