import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    align-items: center;
    padding-bottom: 8px;
`;

export const NavLinkStyled = styled(NavLink)`
    padding: 4px;
    text-decoration: none;
    border: 1px solid black;

    :hover {
        color: #fff;
        background-color: orangered; 
    }
`;