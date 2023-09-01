import { useDispatch, useSelector } from "react-redux"
import { UserMenuStyled } from "./UserMenu.styled"
import { logout } from "redux/auth/operations";
import { selectUser } from "redux/auth/selectors";
import { Button } from "components/RegisterForm/RegisterForm.styled";

export const UserMenu = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logout());
    }

    return (
        <UserMenuStyled>
            <p>Hello, {user.name}!</p>
            <Button onClick={handleLogOut}>Log Out</Button>
        </UserMenuStyled>
    )
}