import { useDispatch } from "react-redux";
import { FormStyled } from "./RegisterForm.styled"
import { register } from "redux/auth/operations";

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = e.target.elements;
        dispatch(register({name: name.value, email: email.value, password: password.value}));
        e.target.reset();
    } 

    return (
        <FormStyled onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder="Enter name" />
            <input type="email" name='email' placeholder="Enter email" />
            <input type="password" name='password' placeholder="Enter password" />
            <button type='submit'>Register</button>
        </FormStyled>
    )
}