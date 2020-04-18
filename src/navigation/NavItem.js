import React from 'react';
import styled from 'styled-components'

const StyledNavItem = styled.div`
    display: flex;
    align-items: center;
    font-size: ${({theme}) => theme.fontSize.body};
    text-transform: capitalize;
    padding: 5px 10px;
    text-decoration: none;
    color: ${({theme}) => theme.color.dark};
    cursor: pointer;
    & > i {
        margin-right: 10px;
        background-color: ${({theme}) => theme.color.dark};
        padding: 5px;
        border-radius: 3px;
        color: ${({theme}) => theme.color.light};
    }
`

const NavItem = ({icon, label, as, href}) =>
    <StyledNavItem as={as} href={href}>
        <i className={icon || "fas fa-circle"}></i>
        <span>{label || 'label'}</span>
    </StyledNavItem>

export default NavItem;
