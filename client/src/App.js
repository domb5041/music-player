import React, {useState, useEffect} from 'react';
import Navigation from './navigation/Navigation'
import Browser from './browser/Browser'
import Player from './player/Player'
import styled, { ThemeProvider } from 'styled-components';

const StyledApp = styled.div`
	display: grid;
	grid-template-columns: 200px 1fr 240px;
	height: 100vh;
	overflow: hidden;
	background: ${props => props.theme.color.light};
`

const theme = {
	color: {
		light: '#FAFAFA',
		dark: '#6E7681',
	},
	fontSize: {
		title: '30px',
		heading: '20px',
		body: '16px',
		minor: '12px'
	}
}

function App() {	
	const getHashParams = () => {
		var hashParams = {};
		var e, r = /([^&;=]+)=?([^&;]*)/g,
		q = window.location.hash.substring(1);
		e = r.exec(q)
		while (e) {
			hashParams[e[1]] = decodeURIComponent(e[2]);
			e = r.exec(q);
		}
		console.log(hashParams)
		return hashParams;
	}

	const params = getHashParams();
	const [response, setResponse] = useState(null)

	useEffect(() => {
		fetch("https://api.spotify.com/v1/me/player/currently-playing",
		{
			method: 'GET',
			headers: {
				'Authorization': 'Bearer ' + params.access_token,
			}
		  }
		  )
			.then(response => response.json())
			.then(response => setResponse(response))
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<a href='http://localhost:8888'>log in</a>
			{response && response.item.name}
			<StyledApp>
				<Navigation/>	
				<Browser/>
				<Player/>
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;
