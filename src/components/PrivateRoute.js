import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsFetchingCurrUser } from "redux/auth/selectors";

export const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isFetchingCurrUser = useSelector(selectIsFetchingCurrUser)
    const shouldRedirect = !isLoggedIn && !isFetchingCurrUser;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}