import styled, {css} from 'styled-components'

export const StyledCoverArt = styled.div`
	width: ${({size}) => size}px;
	height: ${({size}) => size}px;
	background: ${({theme}) => theme.color.text};
	border-radius: 5px;
	position: relative;
	& > i {
		position: absolute;
		top: 50%;
		left: 50%;
		font-size: ${({size}) => size/2}px;
		transform: translate(-50%, -50%);
	}
`