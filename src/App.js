import React, { useEffect, useState } from 'react';
import Navigation from './navigation/Navigation'
import Browser from './browser/Browser'
import Player from './player/Player'
import Background from './common/Background'
import theme from './common/theme'
import styled, { ThemeProvider } from 'styled-components';
import axios from './common/axios';
import {get} from 'lodash'

const StyledApp = styled.div`
	display: grid;
	grid-template-columns: 200px 1fr 240px;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	position: relative;
	background-color: rgba(0,0,0,0.8);
`

export default function App() {
	const [nowPlaying, setNowPlaying] = useState(null)

	useEffect(() => {
		axios
			.get('player/currently-playing')
			.then(res => setNowPlaying(res.data))
			.catch(err => { console.log(err, err.response) })
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<StyledApp>
				<Background src={get(nowPlaying, 'item.album.images[1].url')}/>
				<Navigation />
				<Browser />
				<Player nowPlaying={nowPlaying} />
			</StyledApp>
		</ThemeProvider>
	);
}
