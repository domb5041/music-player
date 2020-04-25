import React from 'react';
import styled, {css} from 'styled-components'

const StyledNavItem = styled.div`
    ${({theme}) => css`
        display: flex;
        align-items: center;
        font-size: ${theme.fontSize.body};
        text-transform: capitalize;
        padding: 5px 10px;
        text-decoration: none;
        color: ${theme.color.base[4]};
        cursor: pointer;
        & > i {
            margin-right: 10px;
            background-color: ${theme.color.base[0]};
            padding: 5px;
            border-radius: 3px;
            color: ${theme.color.base[4]};
        }
    `}
`

const NavItem = ({icon, label, as, href}) =>
    <StyledNavItem as={as} href={href}>
        <i className={icon || "fas fa-circle"}></i>
        <span>{label || 'label'}</span>
    </StyledNavItem>

export default NavItem;
