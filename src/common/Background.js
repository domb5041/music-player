import React from 'react';
import styled from 'styled-components'

const StyledBackground = styled.img`
	width: 150vw;
	height: 150vh;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: -1;
	filter: blur(100px) saturate(5) brightness(2);
`

export default function Background({src}) {
	return (
		<StyledBackground src={src} />
	)
}

Background.defaultProps = {
	src: require('./blank album.png')
}
