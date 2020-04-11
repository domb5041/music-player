import React from 'react';
import styled from 'styled-components'

const StyledNavItem = styled.div`
    display: flex;
    align-items: center;
    font-size: ${({theme}) => theme.fontSize.body};
    text-transform: capitalize;
    padding: 5px 10px;
    color: ${({theme}) => theme.color.dark};
    & > i {
        margin-right: 10px;
        background-color: ${({theme}) => theme.color.dark};
        padding: 5px;
        border-radius: 3px;
        color: ${({theme}) => theme.color.light};
    }
`

const NavItem = ({icon, label}) =>
    <StyledNavItem>
        <i className={icon || "fas fa-circle"}></i>
        <label>{label || 'label'}</label>
    </StyledNavItem>

export default NavItem;
