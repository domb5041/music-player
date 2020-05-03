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

export const StyledSlider = styled.div`
	& > input {
		-webkit-appearance: none;
		outline: none;
		width: 100%;
		height: 4px;
		background: ${({theme}) => theme.color.base[0]};
		border-radius: 5px;
		display: block;
		margin: 7px 0;
		&::-webkit-slider-thumb {
			-webkit-appearance: none;
			width: 10px;
			height: 10px;
			background: ${({theme}) => theme.color.base[4]};
			border-radius: 10px;
		}
	}
	& > .labels {
		display: flex;
		justify-content: space-between;
		font-size: ${({theme}) => theme.fontSize.minor};
		color: ${({theme}) => theme.color.base[3]};
		user-select: none;
	}
`