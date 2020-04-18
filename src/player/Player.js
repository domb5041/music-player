import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import PlayControls from './PlayControls'
import PlayingNext from './PlayingNext'
import CoverArt from '../common/CoverArt'
import SongLabel from '../common/SongLabel'
import axios from 'axios';
import {params} from '../common/utilityFunctions'

const StyledPlayer = styled.div`
	border-left: 1px solid ${props => props.theme.color.dark};
	padding: 20px;
	overflow-y: auto;
`

function Player() {
	const [nowPlaying, setNowPlaying] = useState(null)
	useEffect(() => {
		let config = {
			headers: {
				'Authorization': 'Bearer ' + params().access_token,
			}
		}
		axios.get('https://api.spotify.com/v1/me/player/currently-playing', config)
		.then(response => {
			console.log(response);
			setNowPlaying(response.data);
		})
	}, [])

	return (
		nowPlaying &&
		<StyledPlayer>
			<CoverArt image={nowPlaying.item.album.images[1].url} style={{marginBottom: 10}}/>
			<SongLabel labels={[nowPlaying.item.name, nowPlaying.item.artists[0].name]}/>
			<PlayControls nowPlaying={nowPlaying}/>
			<PlayingNext/>
		</StyledPlayer>
	);
}

export default Player;
