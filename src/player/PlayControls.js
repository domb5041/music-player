import React from 'react';
import styled from 'styled-components'

const StyledPlayControls =  styled.div`
	margin-top: 30px;
	margin-bottom: 40px;
`

const StyledSkipPausePlay = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px 0;
	color: ${({theme}) => theme.color.dark};
	& > i {
		font-size: 25px;
		padding: 20px;
	}
`

const StyledPlayback = styled.div`
	& > input {
		-webkit-appearance: none;
		outline: none;
		width: 100%;
		height: 4px;
		background: ${({theme}) => theme.color.dark};
		border-radius: 5px;
		display: block;
		margin: 7px 0;
		&::-webkit-slider-thumb {
			-webkit-appearance: none;
			width: 10px;
			height: 10px;
			background: ${({theme}) => theme.color.dark};
			border-radius: 10px;
		}
	}
	& > div {
		display: flex;
		justify-content: space-between;
		font-size: ${({theme}) => theme.fontSize.minor};
		color: ${({theme}) => theme.color.dark}
	}
`

function PlayControls({nowPlaying}) {
	return (
		<StyledPlayControls>
			<StyledPlayback>
				<div>
					<span>{nowPlaying.progress_ms}</span>
					<span>{nowPlaying.item.duration_ms}</span>
				</div>
				<input
					type="range"
					min={0}
					value={nowPlaying.progress_ms}
					max={nowPlaying.item.duration_ms}
				/>
			</StyledPlayback>
			<StyledSkipPausePlay>
				<i className="fas fa-backward"></i>
				<i className={nowPlaying.is_playing ? "fas fa-pause" : "fas fa-play"}></i>
				<i className="fas fa-forward"></i>
			</StyledSkipPausePlay>
			<StyledPlayback>
				<input type="range"/>
				<div>
					<i className="fas fa-volume-down"></i>
					<i className="fas fa-volume-up"></i>
				</div>
			</StyledPlayback>
		</StyledPlayControls>
	);
}

export default PlayControls;