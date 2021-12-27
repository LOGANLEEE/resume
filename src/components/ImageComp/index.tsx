import React from 'react';
import profile_image from 'asset/profile2.jpg';

import styled from 'styled-components';

interface StyledProps {
	radius?: number;
}
export const StyledImg = styled.img<StyledProps>`
	border-radius: ${({ radius }) => (radius ? radius + 'px' : 0)};
`;

interface Props {
	imagePath?: string;
	radius?: number;
	width?: number | string;
	height?: number | string;
}

export const ImageComp = ({ imagePath, radius, width, height }: Props) => (
	<StyledImg radius={radius} src={imagePath || profile_image} onError={() => profile_image} width={width} height={height} />
);
