import { useDispatch } from "react-redux"
import { LoginFormStyled } from "./LoginForm.styled"
import { login } from "redux/auth/operations";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        dispatch(login({email: email.value, password: password.value}));
        e.target.reset();
    }

    return (
        <LoginFormStyled onSubmit={handleSubmit}>
            <input type='email' name='email' placeholder="Enter email" />
            <input type='password' name='password' placeholder="Enter password" />
            <button type='submit'>Log In</button>
        </LoginFormStyled>
    )
}