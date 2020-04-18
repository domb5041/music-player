import React from 'react';
import styled, {css} from 'styled-components'

const StyledCoverArt = styled.div`
	width: 100%;
	padding-top: 100%;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;
	& img {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`

const CoverArt = ({style, image}) =>
	<StyledCoverArt style={style}>
		<img src={image}/>
	</StyledCoverArt>

CoverArt.defaultProps = {
	image: require('./blank album.png')
}

export default CoverArt;
