import React from 'react';
import styled from 'styled-components'
import NavItem from './NavItem'

const StyledNavigation = styled.div`
	border-right: 1px solid ${props => props.theme.color.base[0]};
	padding: 15px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export default function Navigation() {
	return (
		<StyledNavigation>
			<div>
				<NavItem
					to='/artists'
					icon='fas fa-guitar'
					label='artists'
				/>
				<NavItem
					to='/albums'
					icon='fas fa-compact-disc'
					label='albums'
				/>
				<NavItem
					to='/songs'
					icon='fas fa-music'
					label='songs'
				/>
				<NavItem
					to='/playlists'
					icon='fas fa-list-ol'
					label='playlists'
				/>
			</div>
			<div>
				<NavItem
					as='a'
					icon='fas fa-sign-in-alt'
					href='http://localhost:8888/login'
					label='log in with Spotify'
				/>
			</div>
		</StyledNavigation>
	);
}
