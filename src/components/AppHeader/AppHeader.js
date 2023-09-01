import { Header, NavLinkStyled } from "./AppHeader.styled"
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";

export const AppHeader = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    return (
        <Header>
            <nav>
                <NavLinkStyled to='/'>Home</NavLinkStyled>
                {isLoggedIn ? <NavLinkStyled to='/contacts'>Contacts</NavLinkStyled> : null}
            </nav>
            {
                isLoggedIn ? <UserMenu />
                : <div>
                    <NavLinkStyled to='/register'>Register</NavLinkStyled>
                    <NavLinkStyled to='/login'>Log In</NavLinkStyled>
                </div>
            }
        </Header>
    )
}