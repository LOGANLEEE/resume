import React, { memo, ReactChildren, ReactNode } from 'react';
import { Wrapper } from './Wrapper';

interface Props {
	children?: any;
	onClick?: () => void;
}
export const Button = memo(({ children, onClick }: Props) => {
	return <Wrapper onClick={onClick}>{children}</Wrapper>;
});

Button.displayName = 'Button';
