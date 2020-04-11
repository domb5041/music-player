import React from 'react';
import styled from 'styled-components'
import NavItem from './NavItem'

const StyledNavigation = styled.div`
	border-right: 1px solid ${props => props.theme.color.dark};
	padding-top: 15px;
`

function Navigation() {
	return (
		<StyledNavigation>
			<NavItem icon='fas fa-clock' label='recently added'/>
			<NavItem icon='fas fa-guitar' label='artists'/>
			<NavItem icon='fas fa-compact-disc' label='albums'/>
			<NavItem icon='fas fa-music' label='songs'/>
			<NavItem icon='fas fa-arrow-circle-down' label='downloaded'/>
		</StyledNavigation>
	);
}

export default Navigation;
