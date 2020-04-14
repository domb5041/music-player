import React from 'react';
import styled from 'styled-components'

const StyledCoverArt = styled.div`
	width: 100%;
	padding-top: 100%;
	background: ${({theme}) => theme.color.dark};
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	& > i {
		font-size: 20px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: ${({theme}) => theme.color.light};
	}
`

const CoverArt = ({style}) =>
	<StyledCoverArt style={style}>
		<i className="fas fa-music"></i>
	</StyledCoverArt>

export default CoverArt;
