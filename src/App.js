import React, {useEffect, useState} from 'react';
import Navigation from './navigation/Navigation'
import Browser from './browser/Browser'
import Player from './player/Player'
import styled, { ThemeProvider } from 'styled-components';
import axios from './common/axios';

const StyledApp = styled.div`
	display: grid;
	grid-template-columns: 200px 1fr 240px;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	position: relative;
	background-color: rgba(0,0,0,0.8);
	& > img {
		width: 150vw;
		height: 150vh;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		filter: blur(100px) saturate(5) brightness(2);
	}
`

const theme = {
	color: {
		base: [
			'rgba(255,255,255,0.2)',
			'rgba(255,255,255,0.4)',
			'rgba(255,255,255,0.6)',
			'rgba(255,255,255,0.8)',
			'rgba(255,255,255,1)',
		]
	},
	fontSize: {
		title: '30px',
		heading: '20px',
		body: '16px',
		minor: '12px'
	}
}

function App() {	
	const [nowPlaying, setNowPlaying] = useState(null)
	
	useEffect(() => {
		axios
		.get('player/currently-playing')
		.then(res => setNowPlaying(res.data))
		.catch(err => {console.log(err, err.response)})
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<StyledApp>
				{nowPlaying && <img src={nowPlaying.item.album.images[1].url}/>}
				<Navigation/>	
				<Browser/>
				<Player nowPlaying={nowPlaying}/>
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;
