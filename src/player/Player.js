import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import PlayControls from './PlayControls'
import PlayingNext from './PlayingNext'
import CoverArt from '../common/CoverArt'
import SongLabel from '../common/SongLabel'
import axios from '../common/axios';

const StyledPlayer = styled.div`
	border-left: 1px solid ${props => props.theme.color.dark};
	padding: 20px;
	overflow-y: auto;
`

function Player() {
	const [nowPlaying, setNowPlaying] = useState(null)
	
	useEffect(() => {setInterval(getNowPlaying, 1000)}, [])

	const getNowPlaying = () => {
		axios
		.get('player/currently-playing')
		.then(res => setNowPlaying(res.data))
		.catch(err => {console.log(err, err.response)})
	}

	return (
		<StyledPlayer>
			{nowPlaying &&
				<>
					<CoverArt image={nowPlaying.item.album.images[1].url} style={{marginBottom: 10}}/>
					<SongLabel labels={[nowPlaying.item.name, nowPlaying.item.artists[0].name]}/>
					<PlayControls nowPlaying={nowPlaying}/>
					<PlayingNext/>
				</>
			}
		</StyledPlayer>
	);
}

export default Player;
