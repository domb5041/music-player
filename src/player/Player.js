import React from 'react';
import styled from 'styled-components'
import CoverArt from '../common/CoverArt'
import SongLabel from '../common/SongLabel'
import _ from 'lodash'
import PlaybackSlider from './PlaybackSlider'
import SkipPausePlay from './SkipPausePlay'
import {StyledSlider} from '../common/common'

const StyledPlayer = styled.div`
	border-left: 1px solid ${props => props.theme.color.base[0]};
	padding: 20px;
	overflow-y: auto;
`

const StyledShuffleRepeat = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	column-gap: 5px;
	margin-bottom: 10px;
	margin-top: 30px;
	color: ${({theme}) => theme.color.base[4]};
	font-size: ${({theme}) => theme.fontSize.body};
	& > i {
		padding: 5px;
		background: ${({theme}) => theme.color.base[0]};
		color: ${({theme}) => theme.color.base[4]};
		border-radius: 5px;
		text-align: center;
	}
`

export default function Player({nowPlaying}) {
	return (
		<StyledPlayer>
			<CoverArt
				image={_.get(nowPlaying, 'item.album.images[1].url')}
				style={{marginBottom: 10}}
			/>
			<SongLabel
				style={{marginBottom: 30}}
				labels={[
					_.get(nowPlaying, 'item.name'),
					_.get(nowPlaying, 'item.artists[0].name')
				]}
			/>
			<PlaybackSlider
				currentTime={_.get(nowPlaying, 'progress_ms')}
				maxTime={_.get(nowPlaying, 'item.duration_ms')}
			/>
			<SkipPausePlay isPlaying={_.get(nowPlaying, 'is_playing')}/>
			<StyledSlider>
				<input type="range"/>
				<div className='labels'>
					<i className="fas fa-volume-down"></i>
					<i className="fas fa-volume-up"></i>
				</div>
			</StyledSlider>
			<StyledShuffleRepeat>
				<i className="fas fa-random"></i>
				<i className="fas fa-sync-alt"></i>
			</StyledShuffleRepeat>
		</StyledPlayer>
	);
}
