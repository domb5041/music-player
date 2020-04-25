import React from 'react';
import styled from 'styled-components'
import axios from '../common/axios'

const StyledPlayControls =  styled.div`
	margin-top: 30px;
	margin-bottom: 40px;
`

const StyledSkipPausePlay = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px 0;
	color: ${({theme}) => theme.color.base[4]};
	& > i {
		font-size: 25px;
		padding: 20px;
		cursor: pointer;
	}
`

const StyledPlayback = styled.div`
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
	& > div {
		display: flex;
		justify-content: space-between;
		font-size: ${({theme}) => theme.fontSize.minor};
		color: ${({theme}) => theme.color.base[3]}
	}
`

function PlayControls({nowPlaying}) {
	const togglePlayback = () => {
		axios
		.put(`player/${nowPlaying.is_playing ? 'pause' : 'play'}`)
		.catch(err => {console.log(err, err.response)})
	}

	const skipTrack = (direction) => {
		axios
		.post(`player/${direction === 'forward' ? 'next' : 'previous'}`)
		.catch(err => {console.log(err, err.response)})
	}

	const seekPlayback = (e) => {
		axios
		.put('player/seek', {position_ms: e.target.value})
		.catch(err => {console.log(err, err.response)})
	}

	const formatTime = (ms) => {
		const seconds = Math.round(ms / 1000)
		const minutes = Math.floor(seconds / 60);
		const remainderSeconds = seconds % 60;
		const zero = remainderSeconds < 10 ? '0' : '';
		const time = minutes + ':' + zero + remainderSeconds
		return time;
	}

	return (
		<StyledPlayControls>
			<StyledPlayback>
				<div>
					<span>{formatTime(nowPlaying.progress_ms)}</span>
					<span>-{formatTime(nowPlaying.item.duration_ms - nowPlaying.progress_ms)}</span>
				</div>
				<input
					type="range"
					min={0}
					value={nowPlaying.progress_ms}
					max={nowPlaying.item.duration_ms}
					step={nowPlaying.item.duration_ms / 1000}
					onChange={seekPlayback}
				/>
			</StyledPlayback>
			<StyledSkipPausePlay>
				<i
					className="fas fa-backward"
					onClick={() => skipTrack('backward')}
				/>
				<i
					className={nowPlaying.is_playing ? "fas fa-pause" : "fas fa-play"}
					onClick={togglePlayback}
				/>
				<i
					className="fas fa-forward"
					onClick={() => skipTrack('forward')}
				/>
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
