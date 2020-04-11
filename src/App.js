import React from 'react';
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
	return (
		<ThemeProvider theme={theme}>
			<StyledApp>
				<Navigation/>
				<Browser/>
				<Player/>
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;
