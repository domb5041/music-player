import React from 'react';
import styled, {css} from 'styled-components'

const StyledCoverArt = styled.div`
	${({theme, image}) => css`
		width: 100%;
		padding-top: 100%;
		background: ${theme.color.dark};
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		background-image: url(${image});
		& > i {
			font-size: 20px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: ${theme.color.light};
		}
	`}
`

const CoverArt = ({style, image}) =>
	<StyledCoverArt style={style} image={image}>
		<i className="fas fa-music"></i>
	</StyledCoverArt>

export default CoverArt;
