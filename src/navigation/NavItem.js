import React from 'react';
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const StyledNavItem = styled(Link)`
	${({ theme, active }) => css`
		display: flex;
		align-items: center;
		font-size: ${theme.fontSize.body};
		text-transform: capitalize;
		padding: 5px 10px;
		text-decoration: none;
		color: ${theme.color.base[4]};
		cursor: pointer;
		background: ${active && theme.color.base[0]};
		user-select: none;
		& > i {
			margin-right: 10px;
			background-color: ${active ? theme.color.base[4] : theme.color.base[0]};
			color: ${active ? '#333333' : theme.color.base[4]};
			padding: 5px;
			border-radius: 3px;
		}
	`}
`

export default function NavItem({ icon, label, as, to }) {
	const location = useLocation();
	return (
		<StyledNavItem as={as} to={to} active={location.pathname === to}>
			<i className={icon || "fas fa-circle"}></i>
			<span>{label || 'label'}</span>
		</StyledNavItem>
	)
}
