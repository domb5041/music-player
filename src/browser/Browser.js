import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Album from './Album';
import axios from '../common/axios'
import { Route } from 'react-router-dom'

const StyledBrowser = styled.div`
	flex: 1;
	padding: 20px;
	overflow-y: auto;
	h1 {
		margin-top: 0;
		font-weight: bold;
		font-size: 40px;
		color: ${({ theme }) => theme.color.base[4]}
	}
`

const StyledAlbums = styled.div`
	display: grid;
	grid-template-columns: repeat( auto-fit, minmax(170px, 1fr) );
	grid-template-rows: auto;
	column-gap: 20px;
  	row-gap: 20px;
`

function Browser() {
	const [albums, setAlbums] = useState(null)
	useEffect(() => {
		axios
			.get('/albums')
			.then(res => setAlbums(res.data.items))
			.catch(err => { console.log(err, err.response) })
	}, [])

	return (
		<StyledBrowser>
			<Route path='/artists'>
				<h1>Artists</h1>
			</Route>
			<Route path='/albums'>
				<h1>Albums</h1>
				{albums &&
					<StyledAlbums>
						{albums.map((album, i) =>
							<Album key={i} album={album.album} />
						)}
					</StyledAlbums>
				}
			</Route>
			<Route path='/songs'>
				<h1>Songs</h1>
			</Route>
			<Route path='/playlists'>
				<h1>Playlists</h1>
			</Route>
		</StyledBrowser>
	);
}

export default Browser;
